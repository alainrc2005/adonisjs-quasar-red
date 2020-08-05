<template>
    <q-page class="q-ma-md" padding>
        <div class="background-world"/>
        <q-table
                :grid="$q.screen.xs"
                :columns="columns"
                :data="entities"
                :pagination.sync="pagination"
                row-key="id"
                :rows-per-page-options="[10,25,50]"
                @request="onRequest"
                binary-state-sort
                dense
        >
            <template v-slot:top>
                <div class="col-md-12 text-center">
                    <label class="text-h6">Entidades</label>
                    <q-badge color="green" align="top" :label="pagination.rowsNumber"/>
                </div>
                <div class="col-xs-12 col-md-12 q-px-sm">
                    <q-input debounce="750" dense label="Nombre de la Entidad" v-model="filters.entity" clearable/>
                </div>
                <div class="col-xs-12 col-md-6 q-px-sm">
                    <q-select v-model="filters.province" option-label="description" option-value="id"
                              dense options-dense :options="provinces" map-options emit-value
                              clearable
                              label="Provincia"/>
                </div>
                <div class="col-xs-12 col-md-6 q-px-sm">
                    <q-select v-model="filters.municipality" option-label="description" option-value="id"
                              dense options-dense :options="getMunicipalities" map-options emit-value
                              clearable :disable="filters.province == null"
                              label="Municipio"/>
                </div>
            </template>
            <template v-slot:no-data>
                <div class="full-width row flex-center text-primary q-gutter-sm">
                    <q-icon size="2em" name="sentiment_dissatisfied"/>
                    <span>No existen entidades que mostrar</span>
                    <q-icon size="2em" name="sentiment_dissatisfied"/>
                </div>
            </template>
            <template v-slot:body="props">
                <q-tr :props="props">
                    <q-td key="action">
                        <menu-vert @clkedit="edit(props.row.id)" @clkremove="remove(props.row.id)" v-if="isManageable"/>
                    </q-td>
                    <q-td key="name">{{props.row.name}}</q-td>
                    <q-td key="province">{{props.row.province_text}}</q-td>
                    <q-td key="municipality">{{props.row.municipality_text}}</q-td>
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
                                    <q-item-label>Provincia</q-item-label>
                                </q-item-section>
                                <q-item-section side>
                                    <q-item-label caption>{{ props.row.province_text }}</q-item-label>
                                </q-item-section>
                            </q-item>
                            <q-item>
                                <q-item-section>
                                    <q-item-label>Municipio</q-item-label>
                                </q-item-section>
                                <q-item-section side>
                                    <q-item-label caption>{{ props.row.municipality_text }}</q-item-label>
                                </q-item-section>
                            </q-item>
                        </q-list>
                        <q-separator/>
                        <q-card-actions align="center">
                            <q-btn color="positive" rounded size="xs" icon="mdi-square-edit-outline"
                                   label="Editar"/>
                            <q-btn color="negative" rounded size="xs" icon="mdi-delete"
                                   label="Eliminar"/>
                        </q-card-actions>
                    </q-card>
                </div>
            </template>
        </q-table>
        <q-page-sticky position="top-right" :offset="fabPos" v-if="!$q.loadingBar.onScreen">
            <q-fab
                    icon="add"
                    direction="down"
                    color="primary"
                    :disable="draggingFab"
                    v-touch-pan.prevent.mouse="moveFab"
                    glossy
            >
                <q-fab-action @click="create" color="cyan-6" icon="mdi-plus" :disable="draggingFab" v-if="isManageable">
                    <q-tooltip :delay="500" content-class="bg-yellow-12 text-black shadow-4" anchor="top middle"
                               self="center middle">
                        Crear Nueva Entidad
                    </q-tooltip>
                </q-fab-action>
                <q-fab-action color="blue-6" icon="mdi-cloud-download-outline" :disable="draggingFab" @click="download">
                    <q-tooltip :delay="500" content-class="bg-yellow-12 text-black shadow-4" anchor="top middle"
                               self="center middle">
                        Descargar
                    </q-tooltip>
                </q-fab-action>
                <q-fab-action color="info" icon="mdi-filter" :disable="draggingFab" @click="$refs.dlg.show()">
                    <q-tooltip :delay="500" content-class="bg-yellow-12 text-black shadow-4" anchor="top middle"
                               self="center middle">
                        Otros Filtros
                    </q-tooltip>
                </q-fab-action>
            </q-fab>
        </q-page-sticky>
        <q-dialog ref="dlg">
            <q-card class="q-dialog-plugin">
                <q-card-section class="row no-padding">
                    <q-toolbar class="bg-primary text-white">
                        <q-toolbar-title>Filtrar Entidades por ...</q-toolbar-title>
                        <q-btn round dense flat icon="close" v-close-popup>
                            <q-tooltip>Cerrar</q-tooltip>
                        </q-btn>
                    </q-toolbar>
                </q-card-section>
                <q-card-section>
                    <q-select clearable v-model="filters.speed" label="Velocidad del Enlace"
                    :options="speeds" emit-value map-options option-value="id" option-label="description"/>
                </q-card-section>
                <q-card-actions align="right">
                    <q-btn color="positive" label="Filtrar" @click="filterDlg"/>
                </q-card-actions>
            </q-card>
        </q-dialog>
        <backtotop/>
    </q-page>
</template>

<script>
    import {AskForRemove, Error, Success} from '../helpers'
    import * as resources from '../resources'
    import backtotop from '../components/backtotop'
    import menuVert from '../components/menu_vert'
    import * as grants from '../grants'

    export default {
        name: "entities",
        components: {
            backtotop,
            menuVert
        },
        data () {
            return {
                entities: [],
                provinces: [],
                municipalities: [],
                speeds: [],
                fabPos: [5, 5],
                draggingFab: false,
                pagination: {
                    sortBy: 'name',
                    descending: false,
                    page: 1,
                    rowsPerPage: 10,
                    rowsNumber: 0
                },
                filters: {
                    entity: null,
                    province: null,
                    municipality: null,
                    speed: null,
                },
                columns: [
                    {
                        align: 'center',
                        sortable: false
                    },
                    {
                        name: 'name',
                        required: true,
                        label: 'Entidad',
                        align: 'left',
                        field: 'name',
                        sortable: true,
                    },
                    {
                        name: 'province_text',
                        required: true,
                        label: 'Provincia',
                        align: 'left',
                        field: 'province_text',
                        sortable: true,
                    },
                    {
                        name: 'municipality_text',
                        required: true,
                        label: 'Municipio',
                        align: 'left',
                        field: 'municipality_text',
                        sortable: true
                    }
                ]
            }
        },
        watch: {
            'filters.entity': function () {
                this.onRequest({pagination: this.pagination});
            },
            'filters.province': function () {
                this.filters.municipality = null;
                this.onRequest({pagination: this.pagination});
            },
            'filters.municipality': function () {
                this.onRequest({pagination: this.pagination});
            },
        },
        computed: {
            getMunicipalities() {
                if (this.filters.province == null) return [];
                return this.$ld.filter(this.municipalities,{province: this.filters.province});
            },
            isManageable() {
                return _.indexOf(this.$store.state.main.grants, grants.gEntities) !== -1;
            }
        },
        methods: {
            moveFab (ev) {
                this.draggingFab = ev.isFirst !== true && ev.isFinal !== true

                this.fabPos = [
                    this.fabPos[0] - ev.delta.x,
                    this.fabPos[1] + ev.delta.y
                ]
            },
            async onRequest(props) {
                let {page, rowsPerPage, sortBy, descending} = props.pagination;
                let startRow = (page - 1) * rowsPerPage;
                await this.$axios.post('/api/entities/list', {
                    startRow, rowsPerPage, sortBy, descending, filters: this.filters
                }).then(r => {
                    if (r.data.code !== 'Ok') return Error.call(this, resources.eGetEntities);
                    this.entities = r.data.dt.rows;
                    this.pagination.rowsNumber = r.data.dt.recordsFiltered;
                    this.pagination.page = page;
                    this.pagination.rowsPerPage = rowsPerPage;
                    this.pagination.sortBy = sortBy;
                    this.pagination.descending = descending;
                }).catch(e => {
                    Error.call(this, resources.eGetEntities);
                    console.error(e);
                });
            },
            getForSelect () {
                this.$axios.post('/api/entities/forselect').then(r=>{
                    if (r.data.code !=='Ok') return Error.call(this,resources.eGetRegions);
                    this.provinces = r.data.provinces;
                    this.municipalities = r.data.municipalities;
                    this.speeds = r.data.speeds;
                }).catch(e=>{
                    console.error(e);
                    Error.call(this,resources.eGetRegions)
                });
            },
            create () {
                this.$router.push('/entity/store');
            },
            edit (id) {
                this.$router.push(`/entity/update?owl=${id}`);
            },
            remove (id) {
                AskForRemove.call(this).onOk(_ => {
                    this.$axios.post('/api/entity/destroy', {id}).then(r => {
                        if (r.data.code !== 'Ok') return Error.call(this, resources.eDestroyEntity);
                        this.onRequest({pagination: this.pagination});
                        Success.call(this, resources.sDestroyEntity);
                    }).catch(e => {
                        Error.call(this, resources.eDestroyEntity);
                        console.error(e);
                    });
                });
            },
            filterDlg () {
                this.$refs.dlg.hide();
                this.onRequest({pagination: this.pagination});
            },
            download () {
                window.location = '/api/entities/download';
            }
        },
        async mounted() {
            this.getForSelect();
            await this.onRequest({pagination: this.pagination});
        }
    }
</script>