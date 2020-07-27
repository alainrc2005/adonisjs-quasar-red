<template>
    <q-dialog maximized ref="dialog">
        <q-card>
            <q-card-section class="no-padding">
                <q-bar class="bg-primary text-white">
                    <q-icon name="mdi-help-circle"/>
                    <div>Ayuda del Sistema</div>
                    <q-space/>
                    <q-btn flat round size="xs" icon="mdi-close-box" @click="close"/>
                </q-bar>
            </q-card-section>
            <q-card-section v-if="isEditor && inEditMode">
                <div class="row">
                    <div class="col">
                        <div class="q-px-md">
                            <q-input v-model="consecutive" label="Consecutivo" dense/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="q-px-md">
                            <q-input v-model="topic" label="Tópico" dense/>
                        </div>
                    </div>
                    <div class="col padding">
                        <div class="q-px-md">
                            <q-input v-model="subtopic" label="Título" dense/>
                        </div>
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="col">
                        <q-editor ref="editor" :definitions="definitions" v-model="content" :toolbar="toolbar"/>
                    </div>
                </div>
            </q-card-section>
            <q-card-actions align="center" v-if="isEditor && inEditMode">
                <q-btn :loading="$q.loadingBar.onScreen" color="primary" icon="mdi-content-save-edit" label="Guardar"
                       @click="save"/>
                <q-btn color="negative" icon="mdi-close" label="Cerrar" @click="close"/>
            </q-card-actions>
            <q-card-section v-if="inEditMode===false">
                <div class="row">
                    <div class="q-pa-md text-h6">
                        {{topic}}
                        <q-icon name="mdi-arrow-right-circle"/>
                        {{subtopic}}
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 q-pa-xs" v-html="content">
                    </div>
                </div>
            </q-card-section>
        </q-card>
    </q-dialog>
</template>

<script>
    import {mapActions, mapMutations, mapState} from "vuex";
    import {gHelp} from '../grants'
    import {Error, Success} from '../helpers'
    import * as resources from '../resources'

    export default {
        name: "help",
        data() {
            return {
                inEditMode: false,
                action: null,
                definitions: {
                    insert_img: {
                        tip: 'Insertar Imagen',
                        icon: 'mdi-file-image',
                        handler: this.insertImage
                    }
                },
                toolbar: [
                    [{
                        label: this.$q.lang.editor.align,
                        icon: this.$q.iconSet.editor.align,
                        fixedLabel: true,
                        list: 'only-icons',
                        options: ['left', 'center', 'right', 'justify']
                    }],
                    ['bold', 'italic', 'strike', 'underline'],
                    ['insert_img']
                ]
            }
        },
        computed: {
            ...mapState('help', ['help']),
            consecutive: {
                get() {
                    return this.help.consecutive;
                },
                set(v) {
                    this.setHelp({consecutive: v});
                }
            },
            topic: {
                get() {
                    return this.help.topic;
                },
                set(v) {
                    this.setHelp({topic: v});
                }
            },
            subtopic: {
                get() {
                    return this.help.subtopic;
                },
                set(v) {
                    this.setHelp({subtopic: v});
                }
            },
            content: {
                get() {
                    return this.help.content;
                },
                set(v) {
                    this.setHelp({content: v});
                }
            },
            path: {
                get() {
                    return this.help.path;
                },
                set(v) {
                    this.setHelp({path: v});
                }
            },
            isEditor() {
                return _.indexOf(this.$store.state.main.grants, gHelp) !== -1;
            }
        },
        methods: {
            ...mapActions('help', ['createHelp', 'updateHelp', 'removeHelps', 'getTopics']),
            ...mapMutations('help', ['setHelp', 'clearHelp', 'removeTopic']),
            create() {
                this.clearHelp();
                this.inEditMode = true;
                this.action='create';
                this.path = this.$router.currentRoute.path;
                this.$refs.dialog.show();
            },
            show(mode) {
                this.inEditMode = mode;
                this.action='edit';
                this.$refs.dialog.show();
            },
            close() {
                this.$refs.dialog.hide();
            },
            async reloadHelps(){
                if (!await this.getTopics(this.$router.currentRoute.path)) Error.call(this,resources.eReloadHelps);
            },
            async save() {
                if (this.action==='create') {
                    let d = await this.createHelp(this.help);
                    if (d.code!=='Ok') return Error.call(this,resources.eStoreHelp);
                    Success.call(this,resources.sStoreHelp);
                    return this.reloadHelps();
                }
                let d = await this.updateHelp(this.help);
                if (d.code!=='Ok') return Error.call(this,resources.eUpdateHelp);
                Success.call(this,resources.sUpdateHelp);
            },
            async remove(ids) {
                this.$q.dialog({
                    title: "Confirmación",
                    message: "¿Está seguro de borrar el Tópico de Ayuda?",
                    ok: {color: "negative"},
                    cancel: {color: "warning"},
                    persistent: true
                }).onOk(async () => {
                    if (!await this.removeHelps(ids)) return Error.call(this, resources.eDestroyHelp);
                    Success.call(this, resources.sDestroyHelp);
                    this.$ld.each(ids,id=>{
                        this.removeTopic(id);
                    });
                });
            },
            insertImage() {
                const input = document.createElement('input');
                const self = this;
                input.type = 'file';
                input.accept = '.png, .jpg';
                let file;
                input.onchange = _ => {
                    const files = Array.from(input.files);
                    file = files[0];

                    const reader = new FileReader();
                    let dataUrl = '';
                    reader.onloadend = function () {
                        dataUrl = reader.result;
                        self.$refs.editor.runCmd('insertHTML', `<img src="${dataUrl}"/>`);
                    };
                    reader.readAsDataURL(file)
                };
                input.click()
            }
        }
    }
</script>
