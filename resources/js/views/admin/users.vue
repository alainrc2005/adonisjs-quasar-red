<template>
    <q-page padding class="q-ma-md">
        <q-table
                :grid="$q.screen.xs"
                :columns="columns"
                :data="users"
                :pagination.sync="pagination"
                row-key="id"
                :filter="filter"
                :rows-per-page-options="[10,25,50]"
                @request="onRequest"
                binary-state-sort
                dense
        >
            <template v-slot:top>
                <div class="col-md-8 col-xs-12">
                    <label class="text-h6">Usuarios del Sistema</label>
                    <q-badge color="green" align="top" :label="pagination.rowsNumber"/>
                </div>
                <div class="col-md-4 col-xs-12">
                    <q-input bottom-slots dense debounce="300" v-model="filter" label="Buscar">
                        <template v-slot:before>
                            <q-icon name="search"/>
                        </template>
                        <template v-slot:append>
                            <q-icon v-if="filter !== ''" name="close" @click="filter = ''"
                                    class="cursor-pointer"/>
                        </template>
                    </q-input>
                </div>
            </template>
            <template v-slot:body="props">
                <q-tr :props="props">
                    <q-td key="name">{{props.row.name}}</q-td>
                    <q-td key="email">{{props.row.email}}</q-td>
                    <q-td class="text-center" key="created_at">{{props.row.created_at | formatDateTime}}</q-td>
                    <q-td class="text-center" key="actions">
                        <q-btn color="positive" round size="xs" icon="mdi-account-edit" @click="edit(props.row.id)">
                            <q-tooltip content-class="bg-yellow-12 text-black shadow-4">Editar Usuario</q-tooltip>
                        </q-btn>
                        <q-btn color="negative" round size="xs" icon="mdi-account-minus" @click="remove(props.row.id)">
                            <q-tooltip content-class="bg-yellow-12 text-black shadow-4">Eliminar Usuario</q-tooltip>
                        </q-btn>
                        <q-toggle keep-color color="warning" :value="props.row.banned==='1'"
                                  @input="e=>banned(e,props.row)">
                            <q-tooltip content-class="bg-yellow-12 text-black shadow-4">
                                {{props.row.banned==='1'?'Desactivar':'Activar'}}
                            </q-tooltip>
                        </q-toggle>
                    </q-td>
                </q-tr>
            </template>
            <template v-slot:item="props">
                <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition">
                    <q-card>
                        <q-card-section>
                            <q-toggle :label="props.row.name" keep-color color="warning" :value="props.row.banned==='1'"
                                      @input="e=>banned(e,props.row)">
                                <q-tooltip content-class="bg-yellow-12 text-black shadow-4">
                                    {{props.row.banned==='1'?'Desactivar':'Activar'}}
                                </q-tooltip>
                            </q-toggle>
                        </q-card-section>
                        <q-separator/>
                        <q-list dense>
                            <q-item>
                                <q-item-section>
                                    <q-item-label>Email</q-item-label>
                                </q-item-section>
                                <q-item-section side>
                                    <q-item-label caption>{{ props.row.email }}</q-item-label>
                                </q-item-section>
                            </q-item>
                            <q-item>
                                <q-item-section>
                                    <q-item-label>Creado</q-item-label>
                                </q-item-section>
                                <q-item-section side>
                                    <q-item-label caption>{{ props.row.created_at | formatDateTime}}</q-item-label>
                                </q-item-section>
                            </q-item>
                        </q-list>
                        <q-separator/>
                        <q-card-actions align="center">
                            <q-btn color="positive" rounded size="xs" icon="mdi-account-edit" label="Editar"
                                   @click="edit(props.row.id)"/>
                            <q-btn color="negative" rounded size="xs" icon="mdi-account-minus" label="Eliminar"
                                   @click="remove(props.row.id)"/>
                        </q-card-actions>
                    </q-card>
                </div>
            </template>
        </q-table>
        <q-page-sticky position="top" :offset="[18, 15]" v-if="!$q.loadingBar.onScreen">
            <q-btn round color="accent" icon="mdi-plus" @click="create">
                <q-tooltip :delay="1000" content-class="bg-yellow-12 text-black shadow-4" anchor="top middle"
                           self="center middle">
                    Agregar nuevo Usuario
                </q-tooltip>
            </q-btn>
        </q-page-sticky>
        <q-dialog ref="dlg">
            <q-card class="q-dialog-plugin">
                <q-card-section class="row no-padding">
                    <q-toolbar class="bg-primary text-white">
                        <q-toolbar-title>{{caption}}</q-toolbar-title>
                        <q-btn round dense flat icon="close" v-close-popup>
                            <q-tooltip>Cerrar</q-tooltip>
                        </q-btn>
                    </q-toolbar>
                </q-card-section>
                <q-card-section>
                    <div class="row">
                        <div class="col-md-6">
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
                                <q-btn color="red" size="xs" label="Eliminar" @click="removeAvatar"
                                       v-if="avatarReady"/>
                                <q-btn size="xs" color="primary" label="Cambiar"
                                       @click="$refs.avatar.clicked()"/>
                            </div>
                        </div>
                    </div>
                    <q-input dense v-model="$v.user.name.$model" label="Nombre y Apellidos"
                             :error="$v.user.name.$invalid"
                             hide-bottom-space/>
                    <q-input dense v-model="$v.user.email.$model" label="Correo Electrónico"
                             :error="$v.user.email.$invalid"
                             hide-bottom-space/>
                    <q-select dense label="Roles" :options="roles"
                              option-value="id" options-dense
                              option-label="name" v-model="user.roles"
                              multiple
                              emit-value
                              map-options
                              use-chips
                              hide-bottom-space
                              :error="$v.user.roles.$invalid"/>
                </q-card-section>
                <q-card-actions align="right">
                    <q-btn :disable="$v.$invalid" color="positive" label="Guardar" @click="save"/>
                    <q-btn color="negative" label="Cancelar" v-close-popup/>
                </q-card-actions>
            </q-card>
        </q-dialog>
    </q-page>
</template>

<script>
    import * as resources from '../../resources'
    import {email, minLength, required} from 'vuelidate/lib/validators'
    import {AskForRemove, Error, Success} from '../../helpers'
    import {VueAvatar} from 'vue-avatar-editor-improved'

    export default {
        name: "users",
        components: {
            VueAvatar
        },
        data() {
            return {
                action: null,
                users: [],
                user: {
                    id: null,
                    name: null,
                    email: null,
                    roles: []
                },
                rotation: 0,
                scale: 1,
                avatarReady: false,
                avatarTime: this.$ld.now(),
                roles: [],
                filter: '',
                pagination: {
                    sortBy: 'name',
                    descending: true,
                    page: 1,
                    rowsPerPage: 10,
                    rowsNumber: 0
                },
                columns: [
                    {
                        name: 'name',
                        required: true,
                        label: 'Nombre y Apellidos',
                        align: 'left',
                        field: 'name',
                        sortable: true
                    },
                    {
                        name: 'email',
                        required: true,
                        label: 'Email',
                        align: 'left',
                        field: 'email',
                        sortable: true
                    },
                    {
                        name: 'created_at',
                        required: true,
                        label: 'Creado',
                        align: 'center',
                        field: 'created_at',
                        sortable: true
                    },
                    {
                        name: 'actions',
                        required: true,
                        label: 'Acciones',
                        align: 'center',
                        sortable: false
                    }
                ]
            }
        },
        validations: {
            user: {
                name: {required, minLength: minLength(3)},
                email: {required, email},
                roles: {required},
            }
        },
        computed: {
            caption() {
                return this.action === 'edit' ? 'Editar Usuario' : 'Crear Usuario'
            },
            avatar() {
                return `/user/photo/${this.user.id}?${this.avatarTime}`;
            }
        },
        methods: {
            async onRequest(props) {
                let {page, rowsPerPage, sortBy, descending} = props.pagination;
                let filter = props.filter;

                let startRow = (page - 1) * rowsPerPage;
                await this.$axios.post('/api/users/list', {
                    startRow, rowsPerPage, filter, sortBy, descending
                }).then(r => {
                    if (r.data.code !== 'Ok') return Error.call(this, resources.eGetUsers);
                    this.users = r.data.dt.rows;
                    this.pagination.rowsNumber = r.data.dt.recordsFiltered;
                    this.pagination.page = page;
                    this.pagination.rowsPerPage = rowsPerPage;
                    this.pagination.sortBy = sortBy;
                    this.pagination.descending = descending;
                }).catch(e => {
                    Error.call(this, resources.eGetUsers);
                    console.error(e);
                });
            },
            async getRolesAreasForSelect() {
                this.$axios.post('/api/roles/forselect').then(r => {
                    if (r.data.code !== 'Ok') return Error.call(this, resources.eGetRoles);
                    this.roles = r.data.roles;
                }).catch(e => {
                    console.log(e);
                    Error.call(this, resources.eGetRoles);
                })
            },
            create() {
                this.action = 'create';
                this.user.id = this.user.name = this.user.email = null;
                this.user.roles = [];
                this.$refs.dlg.show();
            },
            edit(id) {
                this.$axios.post('/api/user/get', {id}).then(r => {
                    if (r.data.code !== 'Ok') return Error.call(this, resources.eGetUser);
                    if (r.data.user.photo === 'PHOTO') this.avatarReady = true;
                    delete r.data.user.photo;
                    Object.assign(this.user, r.data.user);
                    this.action = 'edit';
                    this.avatarTime = this.$ld.now();
                    this.$refs.dlg.show();
                }).catch(e => {
                    console.log(e);
                    Error.call(this, resources.eGetUser);
                });
            },
            remove(id) {
                AskForRemove.call(this).onOk(async () => {
                    this.$axios.post('/api/user/destroy', {id}).then(r => {
                        if (r.data.code !== 'Ok') return Error.call(this, resources.eDestroyUser);
                        this.onRequest({pagination: this.pagination, filter: this.filter});
                        Success.call(this, resources.sDestroyUser);
                    }).catch(e => {
                        Error.call(this, resources.eDestroyUser);
                        console.log(e);
                    });
                });
            },
            banned(v, row) {
                let rv = (row.banned ^ '1') + '';
                this.$axios.post('/api/user/banned', {id: row.id, banned: rv}).then(r => {
                    if (r.data.code !== 'Ok') return Error.call(this, resources.eUpdateUser);
                    row.banned = rv;
                    Success.call(this, resources.sUpdateUser);
                }).catch(e => {
                    console.log(e);
                    Error.call(this, resources.eUpdateUser);
                });
            },
            save() {
                let urlaction = this.action === 'create' ? '/api/user/store' : '/api/user/update',
                    msg = this.action === 'create' ? [resources.eStoreUser, resources.sStoreUser] : [resources.eUpdateUser, resources.sUpdateUser];
                this.user.photo = this.avatarReady ? this.$refs.avatar.getImageScaled().toDataURL() : null;
                this.$axios.post(urlaction, {...this.user}).then(r => {
                    if (r.data.code !== 'Ok') return Error.call(this, msg[0]);
                    this.onRequest({pagination: this.pagination, filter: this.filter});
                    Success.call(this, msg[1]);
                    this.$refs.dlg.hide();
                }).catch(e => {
                    console.log(e);
                    Error.call(this, msg[0]);
                });
            },
            removeAvatar() {
                this.$refs.avatar.loadImage('/user/photo/0');
                this.avatarReady = false;
            }
        },
        async mounted() {
            await this.onRequest({pagination: this.pagination, filter: this.filter});
            await this.getRolesAreasForSelect();
        }
    }
</script>
