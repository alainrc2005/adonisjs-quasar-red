<template>
    <q-page padding class="q-ma-md">
        <q-table
            :grid="$q.screen.xs"
            :columns="columns"
            :data="roles"
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
                    <label class="text-h6">Roles del Sistema</label>
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
                    <q-td class="text-center" key="created_at">{{props.row.created_at | formatDateTime}}</q-td>
                    <q-td class="text-center" key="actions">
                        <q-btn color="positive" round size="xs" icon="mdi-square-edit-outline" @click="edit(props.row)">
                            <q-tooltip content-class="bg-yellow-12 text-black shadow-4">Editar Rol</q-tooltip>
                        </q-btn>
                        <q-btn color="negative" round size="xs" icon="mdi-delete" @click="remove(props.row.id)">
                            <q-tooltip content-class="bg-yellow-12 text-black shadow-4">Eliminar Rol</q-tooltip>
                        </q-btn>
                    </q-td>
                </q-tr>
            </template>
            <template v-slot:item="props">
                <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition">
                    <q-card>
                        <q-card-section>
                            {{props.row.name}}
                        </q-card-section>
                        <q-separator/>
                        <q-list dense>
                            <q-item>
                                <q-item-section>
                                    <q-item-label>Creado</q-item-label>
                                </q-item-section>
                                <q-item-section side>
                                    <q-item-label caption>{{ props.row.created_at }}</q-item-label>
                                </q-item-section>
                            </q-item>
                        </q-list>
                        <q-separator/>
                        <q-card-actions align="center">
                            <q-btn color="positive" rounded size="xs" icon="mdi-square-edit-outline" label="Editar"
                                   @click="edit(props.row)"/>
                            <q-btn color="negative" rounded size="xs" icon="mdi-delete" label="Eliminar" @click="remove(props.row.id)"/>
                        </q-card-actions>
                    </q-card>
                </div>
            </template>
        </q-table>
        <q-page-sticky position="top" :offset="[18, 15]" v-if="!$q.loadingBar.onScreen">
            <q-btn round color="accent" icon="mdi-plus" @click="create">
                <q-tooltip :delay="1000" content-class="bg-yellow-12 text-black shadow-4" anchor="top middle"
                           self="center middle">
                    Agregar nuevo Rol
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
                    <q-input v-model="$v.rol.name.$model" dense label="Nombre del Rol"/>
                    <q-scroll-area style="height: 250px">
                        <q-list dense>
                            <q-item clickable :key="g.id" v-for="(g,idx) in grants" @click="toggleGrant(idx,g.id)">
                                <q-item-section>{{g.grant}}</q-item-section>
                                <q-item-section side>
                                    <q-toggle :value="rol_grants[idx]!==0" @input="e=>toggleGrant(idx,g.id)"/>
                                </q-item-section>
                            </q-item>
                        </q-list>
                    </q-scroll-area>
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
    import {maxLength, minLength, required} from 'vuelidate/lib/validators'
    import {AskForRemove, Error, Success} from '../../helpers'

    const mustBeGrants = (arr)=> _.reduce(arr,(sum,n)=>{return sum+n},0);
    export default {
        name: "roles",
        data() {
            return {
                action: null,
                grants: [],
                roles: [],
                rol: {
                    id: null,
                    name: null
                },
                rol_grants: [],
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
                        label: 'Rol del Sistema',
                        align: 'left',
                        field: 'name',
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
        computed: {
            caption() {
                return this.action === 'edit' ? 'Editar Rol' : 'Crear Rol'
            }
        },
        validations: {
            rol: {
                name: {
                    required, minLength: minLength(3), maxLength: maxLength(40)
                }
            },
            rol_grants: {
                required,mustBeGrants
            }
        },
        methods: {
            async onRequest(props) {
                let {page, rowsPerPage, sortBy, descending} = props.pagination;
                let filter = props.filter;

                let startRow = (page - 1) * rowsPerPage;
                await this.$axios.post('/api/roles/list', {
                    startRow, rowsPerPage, filter, sortBy, descending
                }).then(r => {
                    if (r.data.code !== 'Ok') return Error.call(this, resources.eGetRoles);
                    this.roles = r.data.dt.rows;
                    this.pagination.rowsNumber = r.data.dt.recordsFiltered;
                    this.pagination.page = page;
                    this.pagination.rowsPerPage = rowsPerPage;
                    this.pagination.sortBy = sortBy;
                    this.pagination.descending = descending;
                }).catch(e => {
                    Error.call(this, resources.eGetRoles);
                    console.error(e);
                });
            },
            getGrants() {
                this.$axios.post('/api/roles/grants').then(r => {
                    if (r.data.code !== 'Ok') return Error.call(this, resources.eGetGrants);
                    this.grants = r.data.grants;
                }).catch(e => {
                    console.error(e);
                    Error.call(this, resources.eGetGrants);
                })
            },
            toggleGrant(idx, v) {
                this.$set(this.rol_grants, idx, this.rol_grants[idx] === 0 ? v : 0);
                this.$v.rol_grants.$touch();
            },
            create() {
                this.action = 'create';
                this.rol.id = this.rol.name = null;
                this.rol_grants = [];
                this.rol_grants = this.$ld.fill(Array(this.grants.length), 0);
                this.$refs.dlg.show();
            },
            edit(row) {
                this.action = 'edit';
                this.$axios.post('/api/roles/rolgrants',{rol:row.id}).then(r=>{
                    if (r.data.code!=='Ok') return Error.call(this,resources.eGetRolGrants);
                    this.rol_grants = this.$ld.fill(Array(this.grants.length), 0);
                    this.$ld.each(r.data.grants,el=>{
                        let pos = this.$ld.findIndex(this.grants,{id:el});
                        if (pos!==-1) this.rol_grants[pos] = el;
                    });
                    Object.assign(this.rol,this.$ld.omit(row,['created_at']));
                    this.$refs.dlg.show();
                }).catch(e=>{
                    console.error(e);
                    Error.call(this,resources.eGetRolGrants);
                });
            },
            remove(id){
                AskForRemove.call(this).onOk(async () => {
                    this.$axios.post('/api/roles/destroy', {id}).then(r => {
                        if (r.data.code !== 'Ok') return Error.call(this, resources.eDestroyRol);
                        this.onRequest({pagination: this.pagination, filter: this.filter});
                        Success.call(this, resources.sDestroyRol);
                    }).catch(e => {
                        Error.call(this, resources.eDestroyRol);
                        console.error(e);
                    });
                });
            },
            filterGrants(){
                return this.$ld.filter(this.rol_grants,el=>{
                    return el!==0;
                });
            },
            save() {
                let urlaction = this.action === 'create' ? '/api/roles/store' : '/api/roles/update',
                    msg = this.action === 'create' ? [resources.eStoreRol, resources.sStoreRol] : [resources.eUpdateRol, resources.sUpdateRol];
                this.$axios.post(urlaction, {rol: this.rol, grants:this.filterGrants()}).then(r => {
                    if (r.data.code !== 'Ok') return Error.call(this, msg[0]);
                    this.onRequest({pagination: this.pagination, filter: this.filter});
                    Success.call(this, msg[1]);
                    this.$refs.dlg.hide();
                }).catch(e => {
                    console.error(e);
                    Error.call(this, msg[0]);
                });
            }
        },
        async mounted() {
            await this.onRequest({pagination: this.pagination, filter: this.filter});
            this.getGrants();
        }
    }
</script>