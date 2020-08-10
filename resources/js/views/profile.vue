<template>
    <q-page padding>
        <q-tabs
                v-model="tab"
                inline-label
                class="bg-primary text-white shadow-2"
        >
            <q-tab name="profile" icon="mdi-account-check" label="Perfil de Usuario"/>
            <q-tab name="password" icon="mdi-account-key" label="Cambiar Contraseña"/>
        </q-tabs>
        <q-separator/>
        <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="profile">
                <q-card>
                    <q-card-section>
                        <div class="row">
                            <div class="col-md-6 text-right">
                                <vue-avatar :width="100"
                                            :height="100"
                                            :borderRadius="50"
                                            :image="avatar"
                                            :scale="scale"
                                            :rotation="rotation"
                                            :color="[255,255,255,1]"
                                            @select-file="avatarReady=true"
                                            ref="avatar">
                                </vue-avatar>
                            </div>
                            <div class="col-md-6">
                                <div class="fit full-width row wrap justify-center items-start content-center">
                                    <q-slider v-if="avatarReady"
                                              v-model="scale"
                                              :min="1"
                                              :max="3"
                                              :step="0.02"
                                              label
                                              :label-value="'Zoom: '+scale"
                                              color="purple"
                                    />
                                    <q-slider v-if="avatarReady"
                                              v-model="rotation"
                                              :min="0"
                                              :max="360"
                                              :step="1"
                                              label
                                              :label-value="'Rotación: '+rotation"
                                              color="light-green"
                                    />
                                    <div class="q-gutter-lg">
                                        <q-btn color="red" label="Eliminar" @click="removeAvatar"
                                               v-if="avatarReady"/>
                                        <q-btn color="primary" label="Cambiar"
                                               @click="$refs.avatar.clicked()"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="q-gutter-y-md">
                            <q-input
                                    name="name"
                                    :error="$v.user.username.$invalid"
                                    square v-model="$v.user.username.$model" label="Nombre y Apellidos"
                                    dense/>
                            <q-input :error="$v.user.email.$invalid" square v-model="$v.user.email.$model"
                                     label="Correo Electrónico" dense :readonly="!isEmailManageable"/>
                            <q-select dense label="Roles" :options="roles"
                                      option-value="id"
                                      option-label="name" v-model="$v.user.roles.$model"
                                      multiple readonly :error="$v.user.roles.$invalid"
                                      emit-value map-options
                                      use-chips/>
                        </div>
                    </q-card-section>
                    <q-separator/>
                    <q-card-actions align="right">
                        <q-btn flat label="Cancelar" color="warning" to="/"/>
                        <q-btn :disable="$v.user.$invalid" flat label="Guardar Perfil" color="primary"
                               @click="saveProfile"/>
                    </q-card-actions>
                </q-card>
            </q-tab-panel>
            <q-tab-panel name="password">
                <q-card>
                    <q-card-section>
                        <div class="q-gutter-y-md">
                            <q-input
                                    :type="ispwd ? 'password' : 'text'"
                                    :error="$v.passwords.oldpassword.$invalid"
                                    name="oldpassword"
                                    square v-model="passwords.oldpassword" label="Contraseña anterior"
                                    dense>
                                <template v-slot:append>
                                    <q-icon :name="ispwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                                            @click="ispwd = !ispwd"/>
                                </template>
                            </q-input>
                            <q-input
                                    :type="isnpwd ? 'password' : 'text'"
                                    :error="$v.passwords.newpassword.$invalid"
                                    name="newpassword"
                                    ref="newpassword"
                                    square v-model="passwords.newpassword" label="Nueva Contraseña"
                                    dense>
                                <template v-slot:append>
                                    <q-icon :name="isnpwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                                            @click="isnpwd = !isnpwd"/>
                                </template>
                            </q-input>
                            <q-input
                                    :type="isrnpwd ? 'password' : 'text'"
                                    :error="$v.passwords.renewpassword.$invalid"
                                    v-model="passwords.renewpassword"
                                    name="renewpassword"
                                    square label="Repetir Nueva Contraseña"
                                    dense>
                                <template v-slot:append>
                                    <q-icon :name="isrnpwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                                            @click="isrnpwd = !isrnpwd"/>
                                </template>
                            </q-input>
                        </div>
                    </q-card-section>
                    <q-separator/>
                    <q-card-actions align="right">
                        <q-btn flat label="Cancelar" color="warning" to="/"/>
                        <q-btn :disable="$v.passwords.$invalid" flat label="Cambiar Contraseña" color="primary"
                               @click="chgPassword"/>
                    </q-card-actions>
                </q-card>
            </q-tab-panel>
        </q-tab-panels>
    </q-page>
</template>

<script>
    import * as resources from '../resources'
    import {Error, Success, Warning} from '../helpers'
    import {email, maxLength, minLength, required, sameAs} from 'vuelidate/lib/validators'
    import * as grants from '../grants'
    import {VueAvatar} from 'vue-avatar-editor-improved'

    export default {
        name: "profile",
        components: {
            VueAvatar
        },
        data() {
            return {
                roles: [],
                tab: 'profile',
                user: {
                    id: null,
                    username: null,
                    email: null,
                    roles: []
                },
                passwords: {
                    oldpassword: null,
                    newpassword: null,
                    renewpassword: null,
                },
                ispwd: true,
                isnpwd: true,
                isrnpwd: true,
                rotation: 0,
                scale: 1,
                avatarReady: false,
                avatarTime: this.$ld.now(),
            }
        },
        validations: {
            user: {
                username: {required, minLength: minLength(3)},
                email: {required, email},
                roles: {required}
            },
            passwords: {
                oldpassword: {required, minLength: minLength(5), maxLength: maxLength(32)},
                newpassword: {required, minLength: minLength(5), maxLength: maxLength(32)},
                renewpassword: {sameAsPassword: sameAs('newpassword')}
            }
        },
        computed: {
            isEmailManageable() {
                return _.indexOf(this.$store.state.main.grants, grants.gEmailProfile) !== -1;
            },
            avatar() {
                return `/user/photo/${this.user.id}?${this.avatarTime}`;
            }
        },
        methods: {
            getUser() {
                this.$axios.post('/api/user/current').then(r => {
                    if (r.data.code !== 'Ok') return Error.call(this, resources.eGetUser);
                    if (r.data.user.photo === 'PHOTO') this.avatarReady = true;
                    delete r.data.user.photo;
                    Object.assign(this.user, r.data.user);
                    this.avatarTime = this.$ld.now();
                    this.$refs.avatar.loadImage(this.avatar);
                }).catch(e => {
                    console.error(e);
                    Error.call(this, resources.eGetUser);
                });
            },
            async getRolesForSelect() {
                this.$axios.post('/api/roles/forselect').then(r => {
                    if (r.data.code !== 'Ok') return Error.call(this, resources.eGetRoles);
                    this.roles = r.data.roles;
                }).catch(e => {
                    console.log(e);
                    Error.call(this, resources.eGetRoles);
                })
            },
            saveProfile() {
                this.user.photo = this.avatarReady ? this.$refs.avatar.getImageScaled().toDataURL() : null;
                this.$axios.post('/api/user/update', {...this.user}).then(r => {
                    if (r.data.code !== 'Ok') return Error.call(this, resources.eUpdateProfile);
                    Success.call(this, resources.sUpdateProfile);
                }).catch(e => {
                    console.log(e);
                    Error.call(this, resources.eUpdateProfile);
                });
            },
            validateSave(res, msgs) {
                switch (res) {
                    case 'Ok':
                        return Success.call(this, msgs[0]);
                    case -3:
                        return Warning.call(this, msgs[2]);
                    default:
                        Error.call(this, msgs[1]);
                }
            },
            chgPassword() {
                this.$axios.post('/api/user/password', {...this.passwords}).then(r => {
                    this.validateSave(r.data.code, [
                        resources.sChangePassword,
                        resources.ePasswordData,
                        resources.eOldPassword
                    ]);
                }).catch(e => {
                    console.log(e);
                });
            },
            removeAvatar() {
                this.$refs.avatar.loadImage('/user/photo/0');
                this.avatarReady = false;
            }
        },
        async beforeMount() {
            await this.getUser();
            await this.getRolesForSelect();
        }
    }
</script>
