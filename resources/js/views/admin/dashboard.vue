<template>
    <q-page padding>
        <div class="row q-gutter-lg justify-center">
            <div class="col-xs-10 col-sm-6 col-md-3">
                <stats icon-color="blue-6" icon="mdi-account-group" label="Usuarios" :counter="stats.users"
                       url="/admin/users"/>
            </div>
            <div class="col-xs-10 col-sm-6 col-md-3">
                <stats icon-color="red-6" icon="mdi-format-list-bulleted-type" label="Acciones"
                       :counter="stats.actions" url="/admin/logs"/>
            </div>
            <div class="col-xs-10 col-sm-6 col-md-3">
                <stats icon-color="brown-6" icon="mdi-group" label="Roles"
                       :counter="stats.roles" url="/admin/roles"/>
            </div>
        </div>
        <br/>
        <q-card class="fit full-width">
            <q-card-section>
                <highcharts ref="hc" :options="chartOptions"/>
            </q-card-section>
        </q-card>
    </q-page>
</template>

<script>
    import stats from '../../components/cardstat'
    import * as resources from '../../resources'
    import {Chart} from 'highcharts-vue'
    import {Error} from '../../helpers'

    export default {
        name: "dashboard",
        components: {
            stats,
            highcharts: Chart
        },
        data() {
            return {
                stats: {
                    users: 0,
                    actions: 0,
                    roles: 0
                },
                chartOptions: {
                    credits: {
                        enabled: false
                    },
                    chart: {
                        type: 'line',
                        events: {
                            load: function(event) {
                                event.target.reflow();
                            }
                        }
                    },
                    title: {
                        text: 'Acciones en los últimos 15 días'
                    },
                    xAxis: {
                        categories: []
                    },
                    yAxis: {
                        title: {
                            text: '# de Acciones'
                        }
                    },
                    plotOptions: {
                        line: {
                            dataLabels: {
                                enabled: true
                            },
                            enableMouseTracking: false
                        }
                    },
                    series: [{
                        name: 'Acciones',
                        data: []
                    }]
                }
            }
        },
        methods: {
            getStats() {
                this.$axios.post('/api/admin/stats').then(r => {
                    if (r.data.code !== 'Ok') return Error.call(this, resources.eGetData);
                    Object.assign(this.stats, r.data.stats);
                    this.chartOptions.xAxis.categories = r.data.dates;
                    this.chartOptions.series[0].data = r.data.counts;
                    this.$nextTick(_=>{
                        window.dispatchEvent(new Event('resize'));
                    });
                }).catch(e => {
                    console.error(e);
                    Error.call(this, resources.eGetData);
                })
            }
        },
        beforeMount() {
            this.getStats();
        }
    }
</script>
