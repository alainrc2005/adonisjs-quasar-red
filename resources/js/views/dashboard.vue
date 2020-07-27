<template>
    <q-page padding class="q-ma-md q-gutter-md">
        <div class="background-world"/>
        <div class="row q-gutter-md justify-center">
            <div class="col-lg-4 col-md-3 col-sm-6 col-xs-12">
                <card-stat icon="mdi-ip-network" icon-color="amber-6" label="Entidades" :counter="stats.entities"
                           url="/entities"/>
            </div>
            <div class="col-lg-4 col-md-3 col-sm-6 col-xs-12">
                <card-stat icon="mdi-speedometer" icon-color="blue-6" label="Velocidades" :counter="stats.speeds"
                           url="/speeds"/>
            </div>
            <div class="col-lg-4 col-md-3 col-sm-6 col-xs-12">
                <card-stat icon="mdi-notebook" icon-color="brown-6" label="Recursos" :counter="stats.resources"
                           url="/resources"/>
            </div>
        </div>
        <div class="row q-gutter-md justify-center">
            <div class="col-lg-4 col-md-3 col-sm-6 col-xs-12">
                <card-stat icon="mdi-alpha-p-circle" icon-color="blue-grey-6" label="Provincias"
                           :counter="stats.provinces"
                           url="/provinces"/>
            </div>
            <div class="col-lg-4 col-md-3 col-sm-6 col-xs-12">
                <card-stat icon="mdi-alpha-m-circle" icon-color="teal-6" label="Municipios"
                           :counter="stats.municipalities" url="/municipalities"/>
            </div>
        </div>
        <q-card class="fit full-width">
            <q-card-section>
                <highcharts ref="hc" :options="chartOptions"/>
            </q-card-section>
        </q-card>
        <backtotop/>
    </q-page>
</template>

<script>
    import cardStat from '../components/cardstat'
    import {Error} from '../helpers'
    import backtotop from '../components/backtotop'
    import {Chart} from 'highcharts-vue'

    export default {
        name: "dashboard",
        components: {
            cardStat,
            backtotop,
            highcharts: Chart
        },
        data() {
            return {
                stats: {
                    entities: 0,
                    speeds: 0,
                    resources: 0,
                    provinces: 0,
                    municipalities: 0
                },
                chartOptions: {
                    credits: {
                        enabled: false
                    },
                    chart: {
                        type: 'column',
                        events: {
                            load: function (event) {
                                event.target.reflow();
                            }
                        }
                    },
                    title: {
                        text: 'Entidades por Provincias'
                    },
                    xAxis: {
                        type: 'category'
                    },
                    yAxis: {
                        title: {
                            text: '# de Entidades'
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    plotOptions: {
                        series: {
                            borderWidth: 0,
                            dataLabels: {
                                enabled: true,
                                format: '{point.y}'
                            }
                        }
                    },
                    series: [{
                        name: 'Entidades',
                        colorByPoint: true,
                        data: []
                    }]
                }
            }
        },
        methods: {
            getDashboardStats() {
                this.$axios.post('/api/stats').then(r => {
                    if (r.data.code !== 'Ok') return Error.call(this, 'Ha ocurrido un error obteniendo estadísticas');
                    Object.assign(this.stats, r.data.stats);
                    this.chartOptions.series[0].data = r.data.gbp[0];
                    this.$nextTick(_ => {
                        window.dispatchEvent(new Event('resize'));
                    });
                }).catch(e => {
                    console.error(e);
                    Error.call(this, 'Ha ocurrido un error obteniendo estadísticas');
                })
            }
        },
        mounted() {
            this.getDashboardStats();
        }
    }
</script>