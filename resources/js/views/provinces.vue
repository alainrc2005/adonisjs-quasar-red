<template>
    <q-page class="q-ma-md" padding>
        <div class="background-world"/>
        <q-card>
            <q-card-section class="row no-padding">
                <q-toolbar class="bg-primary text-white rounded-borders">
                    <q-icon name="mdi-alpha-p-circle" size="md"/>
                    <q-toolbar-title>
                        Gestión de Provincias
                        <q-badge color="green" align="top" :label="pagination.rowsNumber"/>
                    </q-toolbar-title>
                    <q-space/>
                    <q-btn round flat icon="mdi-plus" @click="create">
                        <q-tooltip :delay="500" content-class="bg-yellow-12 text-black shadow-4" anchor="top middle"
                                   self="center middle">
                            Agregar Provincia
                        </q-tooltip>
                    </q-btn>
                </q-toolbar>
            </q-card-section>
            <q-table
                    :grid="$q.screen.xs"
                    :columns="columns"
                    :filter="filter"
                    :data="provinces"
                    :pagination.sync="pagination"
                    row-key="id"
                    :rows-per-page-options="[10,25,50]"
                    @request="onRequest"
                    binary-state-sort
                    dense
            >
                <template v-slot:top>
                    <div class="col-md-12 col-xs-12 text-center">
                        <q-input bottom-slots dense debounce="500" v-model="filter" label="Buscar">
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
                <template v-slot:no-data>
                    <div class="full-width row flex-center text-primary q-gutter-sm">
                        <q-icon size="2em" name="sentiment_dissatisfied"/>
                        <span>No existen Velocidades que mostrar</span>
                        <q-icon size="2em" name="sentiment_dissatisfied"/>
                    </div>
                </template>
                <template v-slot:body="props">
                    <q-tr :props="props">
                        <q-td key="action">
                            <menu-vert @clkedit="edit(props.row)" @clkremove="remove(props.row.id)" v-if="isManageable"/>
                        </q-td>
                        <q-td>{{props.row.description}}</q-td>
                        <q-td class="text-center">{{props.row.updated_at | formatDateTime}}</q-td>
                    </q-tr>
                </template>
                <template v-slot:item="props">
                    <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition">
                        <q-card>
                            <q-card-section>
                                {{props.row.description}}
                            </q-card-section>
                            <q-separator/>
                            <q-list dense>
                                <q-item>
                                    <q-item-section>
                                        <q-item-label>Actualizado</q-item-label>
                                    </q-item-section>
                                    <q-item-section side>
                                        <q-item-label caption>{{ props.row.updated_at |formatDateTime }}</q-item-label>
                                    </q-item-section>
                                </q-item>
                            </q-list>
                            <q-separator/>
                            <q-card-actions align="center" v-if="isManageable">
                                <q-btn color="positive" rounded size="xs" icon="mdi-square-edit-outline"
                                       label="Editar" @click="edit(props.row)"/>
                                <q-btn color="negative" rounded size="xs" icon="mdi-delete"
                                       label="Eliminar" @click="remove(props.row.id)"/>
                            </q-card-actions>
                        </q-card>
                    </div>
                </template>
            </q-table>
            <q-card-section>
            </q-card-section>
        </q-card>
        <backtotop/>
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
                    <q-input v-model="$v.province.description.$model" label="Descripción"
                             :error="$v.province.description.$invalid"/>
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
    import * as grants from "../grants";
    import {Error, Success, AskForRemove} from "../helpers";
    import * as resources from "../resources";
    import menuVert from "../components/menu_vert";
    import backtotop from "../components/backtotop";
    import {minLength, required} from 'vuelidate/lib/validators'

    export default {
        name: "provinces",
        components: {
            menuVert,
            backtotop
        },
        data() {
            return {
                action: 'store',
                provinces: [],
                province: {
                    id: null,
                    description: null
                },
                filter: '',
                pagination: {
                    sortBy: 'description',
                    descending: false,
                    page: 1,
                    rowsPerPage: 25,
                    rowsNumber: 0
                },
                columns: [
                    {
                        align: 'center',
                        sortable: false
                    },
                    {
                        name: 'description',
                        required: true,
                        label: 'Provincia',
                        align: 'left',
                        field: 'description',
                        sortable: true,
                    },
                    {
                        name: 'updated_at',
                        required: true,
                        label: 'Actualizado',
                        align: 'center',
                        field: 'updated_at',
                        sortable: true,
                    }
                ]
            }
        },
        validations: {
            province: {
                description: {
                    required, minLength: minLength(3)
                }
            }
        },
        computed: {
            isManageable() {
                return _.indexOf(this.$store.state.main.grants, grants.gProvinces) !== -1;
            },
            caption() {
                return this.action === 'store' ? 'Crear Provincia' : 'Editar Provincia';
            }
        },
        methods: {
            async onRequest(props) {
                let {page, rowsPerPage, sortBy, descending} = props.pagination;
                let filter = props.filter;
                let startRow = (page - 1) * rowsPerPage;
                await this.$axios.post('/api/provinces/list', {
                    startRow, rowsPerPage, filter, sortBy, descending
                }).then(r => {
                    if (r.data.code !== 'Ok') return Error.call(this, resources.eGetProvinces);
                    this.provinces = r.data.dt.rows;
                    this.pagination.rowsNumber = r.data.dt.recordsFiltered;
                    this.pagination.page = page;
                    this.pagination.rowsPerPage = rowsPerPage;
                    this.pagination.sortBy = sortBy;
                    this.pagination.descending = descending;
                }).catch(e => {
                    Error.call(this, resources.eGetProvinces);
                    console.error(e);
                });
            },
            create () {
                this.action = 'store';
                this.province.id = this.province.description = null;
                this.$refs.dlg.show();
            },
            edit (row) {
                this.action = 'update';
                this.province.id = row.id;
                this.province.description = row.description;
                this.$refs.dlg.show();
            },
            remove(id) {
                AskForRemove.call(this).onOk(_ => {
                    this.$axios.post('/api/province/destroy', {id}).then(r => {
                        if (r.data.code !== 'Ok') return Error.call(this, resources.eDestroyProvince);
                        this.onRequest({pagination: this.pagination, filter: this.filter});
                        Success.call(this, resources.sDestroyProvince);
                    }).catch(e => {
                        Error.call(this, resources.eDestroyProvince);
                        console.error(e);
                    });
                });
            },
            save () {
                let urlAction = '/api/province/' + this.action,
                    msg = this.action === 'store' ? [resources.eStoreProvince, resources.sStoreProvince] : [resources.eUpdateProvince, resources.sUpdateProvince];
                this.$axios.post(urlAction, {...this.province}).then(r => {
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
        mounted() {
            this.onRequest({pagination: this.pagination, filter: this.filter});
        }
    }
</script>