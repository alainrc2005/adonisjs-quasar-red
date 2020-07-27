<template>
    <q-layout view="hHh lpR fFf">
        <q-header elevated v-if="logged">
            <q-toolbar>
                <q-btn flat dense round icon="menu" @click="drawer=!drawer"/>

                <q-toolbar-title>
                    UEB Datos - RED
                </q-toolbar-title>

                <q-space/>

                <div class="q-gutter-sm row items-center no-wrap">
                    <q-btn @click="showHelp" v-if="$route.path!=='/help'" round dense flat color="yellow" size="16px"
                           icon="mdi-help-circle">
                        <q-tooltip>Ayuda</q-tooltip>
                    </q-btn>

                    <q-btn to="/profile" v-if="$route.path!=='/profile'" round dense flat
                           color="text-grey-7">
                        <q-avatar size="28px">
                            <img :src="'/user/photo/'+$store.state.main.userid"/>
                        </q-avatar>
                        <q-tooltip>Perfil de Usuario</q-tooltip>
                    </q-btn>
                    <q-btn to="/logout" round dense flat color="text-grey-7" size="16px"
                           icon="mdi-logout">
                        <q-tooltip>Salir</q-tooltip>
                    </q-btn>
                </div>
            </q-toolbar>
        </q-header>

        <q-drawer
                v-model="drawer"
                elevated
                content-class="bg-white"
                :width="200"
                persistent
        >
            <q-scroll-area class="fit">
                <q-list class="text-grey-8">
                    <q-item v-for="link in $store.state.main.linksUp" :key="link.text" clickable v-ripple class="news" :to="link.link"
                            exact v-if="(link.visible===undefined||link.visible)">
                        <q-item-section avatar>
                            <q-icon :name="link.icon"/>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>{{ link.text }}</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-separator class="local-separator" v-if="$store.state.main.linksDown.length!==0"/>

                    <q-item v-for="link in $store.state.main.linksDown" :key="link.text" clickable v-ripple class="news" :to="link.link"
                            exact v-if="(link.visible===undefined||link.visible)">
                        <q-item-section avatar>
                            <q-icon :name="link.icon"/>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>{{ link.text }}</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-scroll-area>
        </q-drawer>
        <q-drawer
                side="right"
                v-model="helpicon"
                :value="helpicon"
                elevated
                content-class="bg-white"
                :width="300"
        >
            <q-scroll-area class="fit">
                <div class="q-gutter-xs q-my-xs" align="center" v-if="isEditor">
                    <q-btn size="xs" color="primary" label="Agregar Tópico" icon="mdi-book-plus" @click="addTopic"/>
                </div>
                <q-list class="text-grey-8 text-caption" dense>
                    <q-item class="news"
                            exact v-for="lhelp in $store.state.help.helps" :key="lhelp.id">
                        <q-item-section avatar>
                            <q-icon name="mdi-eye"/>
                        </q-item-section>
                        <q-item-section class="cursor-pointer" @click="showTopic(lhelp.id,false)">
                            <q-item-label caption :lines="2">{{lhelp.subtopic}}</q-item-label>
                        </q-item-section>
                        <q-item-section avatar v-if="isEditor">
                            <q-btn color="green" round size="xs" icon="mdi-file-document-edit-outline"
                                   @click="showTopic(lhelp.id,true)"/>
                            <q-btn color="red" round size="xs" icon="mdi-delete-forever"
                                   @click="removeTopic(lhelp.id)"/>
                        </q-item-section>
                    </q-item>
                    <q-separator class="local-separator"/>
                    <q-item clickable v-ripple class="news" exact @click="helpicon=!helpicon">
                        <q-item-section avatar>
                            <q-icon name="mdi-close-box"/>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Cerrar</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-scroll-area>
        </q-drawer>

        <q-page-container style="background-color: #F4F3EF">
            <transition mode="out-in" enter-active-class="animated zoomIn">
                <router-view/>
            </transition>
        </q-page-container>
        <help-component ref="help"/>
    </q-layout>
</template>

<script>
    import {mapActions, mapMutations} from 'vuex'
    import {Error} from './helpers'
    import * as resources from './resources'
    import * as grants from './grants'
    import helpComponent from './components/help'

    export default {
        name: "MainLayout",
        components: {
            helpComponent
        },
        computed: {
            drawer: {
                get() {
                    return this.$store.state.main.drawer;
                },
                set(v) {
                    this.setMain({drawer: v});
                }
            },
            logged: {
                get() {
                    return this.$store.state.main.logged;
                }
            },
            helpicon: {
                get() {
                    return this.$store.state.main.help;
                },
                set(v) {
                    this.setMain({help: v});
                }
            },
            isEditor() {
                return _.indexOf(this.$store.state.main.grants, grants.gHelp) !== -1;
            }
        },
        methods: {
            ...mapActions('help', ['getTopics', 'getHelp']),
            ...mapActions("main", ['Logout']),
            ...mapMutations("main", ['setMain']),
            async showHelp() {
                if (this.helpicon) {
                    this.helpicon = false;
                    return;
                }
                if (!await this.getTopics(this.$router.currentRoute.path))
                    return Error.call(this, resources.eGetHelps);
                this.helpicon = true;
            },
            addTopic() {
                this.$refs.help.create();
            },
            async showTopic(id, editMode) {
                if (!await this.getHelp(id)) {
                    return Error.call(this, resources.eGetTopicHelp);
                }
                this.$refs.help.show(editMode);
            },
            async removeTopic(id) {
                this.$refs.help.remove([id]);
            }
        },
        mounted() {
            this.drawer = this.logged;
        }
    }
</script>

<style>
    .local-separator {
        width: 80%;
        margin-left: calc(calc(100% - 80%) / 2)
    }

    .news {
        min-height: 42px !important;
        max-height: 42px;
    }

    .news:hover {
        border-radius: 0 15% 15% 0;
        color: #42a5f5 !important;
        background-color: transparent !important;
    }
    body {
        font-family: 'Josefin Sans', sans-serif;
    }
</style>