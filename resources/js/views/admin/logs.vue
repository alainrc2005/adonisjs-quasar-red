<template>
    <q-page padding class="q-ma-md">
        <div class="row q-gutter-lg justify-center">
            <div class="col-xs-10 col-sm-6 col-md-2">
                <stats classes="bg-blue-6 text-white" icon="mdi-alpha-d-box" caption="Día" :count="stats.day"
                       @clickedFilter="cardFilter('day')"/>
            </div>
            <div class="col-xs-10 col-sm-6 col-md-2">
                <stats classes="bg-red-6" icon="mdi-alpha-s-box" caption="Semana"
                       :count="stats.week" @clickedFilter="cardFilter('week')"/>
            </div>
            <div class="col-xs-10 col-sm-6 col-md-2">
                <stats classes="bg-brown-6" icon="mdi-alpha-m-box" caption="Mes"
                       :count="stats.month" @clickedFilter="cardFilter('month')"/>
            </div>
            <div class="col-xs-10 col-sm-6 col-md-2">
                <stats classes="bg-purple-6" icon="mdi-alpha-a-box" caption="Año"
                       :count="stats.year" @clickedFilter="cardFilter('year')"/>
            </div>
        </div>
        <br/>
        <q-table
            :grid="$q.screen.xs"
            :columns="columns"
            :data="actions"
            :pagination.sync="pagination"
            row-key="id"
            :rows-per-page-options="[10,25,50]"
            @request="onRequest"
            binary-state-sort
            dense
        >
            <template v-slot:top>
                <div class="col-md-12 text-center">
                    <label class="text-h6">Acciones Realizadas al Sistema</label>
                    <q-badge color="green" align="top" :label="pagination.rowsNumber"/>
                </div>
                <div class="col-xs-12 col-md-12 q-px-sm">
                    <q-select v-model="filters.user" option-label="username" option-value="id"
                              emit-value map-options dense options-dense :options="users"
                              clearable
                              label="Usuario"/>
                </div>
                <div class="col-xs-12 col-md-12 q-px-sm">
                    <q-select v-model="filters.action" option-label="description" option-value="code"
                              dense options-dense :options="actions_codes"
                              clearable
                              label="Acción"/>
                </div>
                <div class="col-xs-12 col-md-4 q-px-sm">
                    <q-input clearable dense v-model="filters.startdate" placeholder="Fecha Inicial">
                        <template v-slot:append>
                            <q-icon name="event"/>
                        </template>
                        <q-menu ref="startDateProxy" anchor="top left" self="top left">
                            <q-date minimal :options="validStartDate" mask="DD/MM/YYYY" v-model="filters.startdate"
                                    @input="() => $refs.startDateProxy.hide()"/>
                        </q-menu>
                    </q-input>
                </div>
                <div class="col-xs-12 col-md-4 q-px-sm">
                    <q-input clearable dense v-model="filters.enddate" placeholder="Fecha Final">
                        <template v-slot:append>
                            <q-icon name="event"/>
                        </template>
                        <template v-slot:default>
                            <q-menu ref="endDateProxy" anchor="top left" self="top left">
                                <q-date minimal :options="validEndDate" mask="DD/MM/YYYY" v-model="filters.enddate"
                                        @input="() => $refs.endDateProxy.hide()"/>
                            </q-menu>
                        </template>
                    </q-input>
                </div>
                <div class="col-xs-12 col-md-4 q-px-sm">
                    <q-input debounce="500" clearable v-model="filters.machine" dense label="Estación">
                        <template v-slot:append>
                            <q-icon name="mdi-desktop-tower-monitor"/>
                        </template>
                    </q-input>
                </div>
            </template>
            <template v-slot:no-data>
                <div class="full-width row flex-center text-primary q-gutter-sm">
                    <q-icon size="2em" name="sentiment_dissatisfied"/>
                    <span>No existen acciones que mostrar</span>
                    <q-icon size="2em" name="sentiment_dissatisfied"/>
                </div>
            </template>
            <template v-slot:body="props">
                <q-tr :props="props">
                    <q-td key="user">{{props.row.user}}</q-td>
                    <q-td key="action">{{props.row.action}}</q-td>
                    <q-td class="text-center" key="machine">{{props.row.machine}}</q-td>
                    <q-td class="text-center" key="datetime">{{props.row.datetime | formatDateTime}}</q-td>
                    <q-td class="text-center" key="act">
                        <q-btn @click="showDetails(props.row.id)" color="primary" round size="xs" icon="visibility">
                            <q-tooltip content-class="bg-yellow-12 text-black shadow-4">Visualizar Detalle</q-tooltip>
                        </q-btn>
                    </q-td>
                </q-tr>
            </template>
            <template v-slot:item="props">
                <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition">
                    <q-card>
                        <q-card-section>
                            {{props.row.action}}
                        </q-card-section>
                        <q-separator/>
                        <q-list dense>
                            <q-item>
                                <q-item-section>
                                    <q-item-label>Usuario</q-item-label>
                                </q-item-section>
                                <q-item-section side>
                                    <q-item-label caption>{{ props.row.user }}</q-item-label>
                                </q-item-section>
                            </q-item>
                            <q-item>
                                <q-item-section>
                                    <q-item-label>Estación</q-item-label>
                                </q-item-section>
                                <q-item-section side>
                                    <q-item-label caption>{{ props.row.machine }}</q-item-label>
                                </q-item-section>
                            </q-item>
                            <q-item>
                                <q-item-section>
                                    <q-item-label>Fecha</q-item-label>
                                </q-item-section>
                                <q-item-section side>
                                    <q-item-label caption>{{ props.row.datetime | formatDateTime}}</q-item-label>
                                </q-item-section>
                            </q-item>
                        </q-list>
                        <q-separator/>
                        <q-card-actions align="center">
                            <q-btn @click="showDetails(props.row.id)" color="primary" rounded size="xs" icon="visibility"
                                   label="Visualizar Detalle"/>
                        </q-card-actions>
                    </q-card>
                </div>
            </template>
        </q-table>

        <json ref="s_json"/>
    </q-page>
</template>
<script>
    import stats from '../../components/statlogs'
    import json from '../../components/action_json'
    import * as resources from '../../resources'
    import {Error} from '../../helpers'
    import moment from 'moment'

    export default {
        name: 'logs',
        components: {
            stats,
            json
        },
        data() {
            return {
                details: null,
                startdate: null,
                enddate: null,
                stats: {
                    day: 0,
                    week: 0,
                    month: 0,
                    year: 0
                },
                users: [],
                actions_codes: [],
                filters: {
                    user: null,
                    action: null,
                    startdate: null,
                    enddate: null,
                    machine: null,
                },
                actions: [],
                pagination: {
                    sortBy: 'datetime',
                    descending: false,
                    page: 1,
                    rowsPerPage: 10,
                    rowsNumber: 0
                },
                columns: [
                    {
                        name: 'user',
                        required: true,
                        label: 'Usuario',
                        align: 'left',
                        field: 'user',
                        sortable: true,
                    },
                    {
                        name: 'action',
                        required: true,
                        label: 'Acción',
                        align: 'left',
                        field: 'action',
                        sortable: true,
                    },
                    {
                        name: 'machine',
                        required: true,
                        label: 'Estación',
                        align: 'center',
                        field: 'machine',
                        sortable: true
                    },
                    {
                        name: 'datetime',
                        required: true,
                        label: 'Fecha',
                        align: 'center',
                        field: 'datetime',
                        sortable: true
                    },
                    {
                        align: 'center',
                        sortable: false
                    }
                ]
            }
        },
        watch: {
            'filters.user': function () {
                this.onRequest({pagination: this.pagination});
            },
            'filters.action': function () {
                this.onRequest({pagination: this.pagination});
            },
            'filters.startdate': function () {
                this.onRequest({pagination: this.pagination});
            },
            'filters.enddate': function () {
                this.onRequest({pagination: this.pagination});
            },
            'filters.machine': function () {
                this.onRequest({pagination: this.pagination});
            }
        },
        methods: {
            async onRequest(props) {
                let {page, rowsPerPage, sortBy, descending} = props.pagination;
                let startRow = (page - 1) * rowsPerPage;
                await this.$axios.post('/api/admin/logs/list', {
                    startRow, rowsPerPage, sortBy, descending, filters: this.filters
                }).then(r => {
                    if (r.data.code !== 'Ok') return Error.call(this, resources.eGetLogs);
                    this.actions = r.data.dt.rows;
                    this.pagination.rowsNumber = r.data.dt.recordsFiltered;
                    this.pagination.page = page;
                    this.pagination.rowsPerPage = rowsPerPage;
                    this.pagination.sortBy = sortBy;
                    this.pagination.descending = descending;
                }).catch(e => {
                    Error.call(this, resources.eGetLogs);
                    console.error(e);
                });
            },
            async getData() {
                await this.$axios.post('/api/admin/logs/getData').then(r => {
                    if (r.data.code !== 'Ok') return Error.call(this, resources.eGetDataLogs);
                    this.users = r.data.users;
                    this.actions_codes = r.data.actions_codes;
                    Object.assign(this.stats, r.data.stats);
                }).catch(e => {
                    console.log(e);
                    Error.call(this, resources.eGetDataLogs);
                });
            },
            getDetails(id) {
                this.$axios.post('/api/admin/logs/getDetails', {id}).then(r => {
                    if (r.data.code !== 'Ok') return Error.call(this, resources.eGetDetailsLog);
                    this.$refs.s_json.show(r.data.details);
                }).catch(e => {
                    console.log(e);
                    Error.call(this, resources.eGetDetailsLog);
                })
            },
            validStartDate(date) {
                return this.filters.enddate === null || date <= moment(this.filters.enddate, 'DD/MM/YYYY').format('YYYY/MM/DD');
            },
            validEndDate(date) {
                return this.filters.startdate === null || date >= moment(this.filters.startdate, 'DD/MM/YYYY').format('YYYY/MM/DD');
            },
            showDetails(id) {
                this.$axios.post('/api/admin/logs/getDetails', {id}).then(r => {
                    if (r.data.code !== 'Ok') return Error.call(this, resources.eGetDetailsLog);
                    this.$refs.s_json.show(r.data.details);
                }).catch(e => {
                    console.log(e);
                    Error.call(this, resources.eGetDetailsLog);
                })
            },
            cardFilter(type) {
                let ds = moment(), de = moment();
                switch (type) {
                    case 'day':
                        this.filters.startdate = this.filters.enddate = ds.format('DD/MM/YYYY');
                        break;
                    case 'week':
                        this.filters.startdate = ds.startOf('week').format('DD/MM/YYYY');
                        this.filters.enddate = de.endOf('week').format('DD/MM/YYYY');
                        break;
                    case 'month':
                        this.filters.startdate = ds.startOf('month').format('DD/MM/YYYY');
                        this.filters.enddate = de.endOf('month').format('DD/MM/YYYY');
                        break;
                    case 'year':
                        this.filters.startdate = ds.startOf('year').format('DD/MM/YYYY');
                        this.filters.enddate = de.endOf('year').format('DD/MM/YYYY');
                        break;
                }
            }
        },
        async beforeMount() {
            await this.getData();
        },
        async mounted() {
            await this.onRequest({pagination: this.pagination});
        }
    }
</script>
