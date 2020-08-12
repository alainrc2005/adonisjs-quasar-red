<template>
    <q-page class="q-ma-md" padding>
        <div class="background-world"/>
        <q-card>
            <q-card-section class="row no-padding">
                <q-toolbar class="bg-primary text-white rounded-borders">
                    <q-icon name="mdi-alpha-p-circle" size="md"/>
                    <q-toolbar-title>
                        {{caption}}
                    </q-toolbar-title>
                    <q-space/>
                    <q-btn @click="save" round flat icon="mdi-content-save" :disable="$v.$invalid">
                        <q-tooltip :delay="500" content-class="bg-yellow-12 text-black shadow-4" anchor="top middle"
                                   self="center middle">
                            Guardar Entidad
                        </q-tooltip>
                    </q-btn>
                </q-toolbar>
            </q-card-section>
            <q-card-section>
                <div class="row q-col-gutter-sm justify-center">
                    <div class="col-md-8 col-xs-12 col-sm-12">
                        <q-input v-model="$v.entity.name.$model" dense label="Nombre de la Entidad"
                                 :error="$v.entity.name.$invalid" hide-bottom-space/>
                    </div>
                    <div class="col-md-8 col-xs-12 col-sm-12">
                        <q-input v-model="$v.entity.address.$model" dense label="Dirección"
                                 :error="$v.entity.address.$invalid" hide-bottom-space/>
                    </div>
                    <div class="col-md-8 col-xs-12 col-sm-12">
                        <div class="row q-col-gutter-sm justify-center">
                            <div class="col-md-6 col-xs-12 col-sm-12">
                                <q-input v-model="$v.entity.workstations.$model" dense label="Cantidad de Estaciones"
                                         :error="$v.entity.workstations.$invalid" hide-bottom-space/>
                            </div>
                            <div class="col-md-6 col-xs-12 col-sm-12">
                                <q-input v-model="$v.entity.users.$model" dense label="Cantidad de Usuarios"
                                         :error="$v.entity.users.$invalid" hide-bottom-space/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8 col-xs-12 col-sm-12">
                        <div class="row q-col-gutter-sm justify-center">
                            <div class="col-md-6 col-xs-12 col-sm-12">
                                <q-select v-model="entity.link_type" :options="links_type" dense label="Tipo de Enlace"
                                          emit-value options-dense map-options/>
                            </div>
                            <div class="col-md-6 col-xs-12 col-sm-12">
                                <q-select v-model="$v.entity.link_speed.$model" :options="speeds" dense
                                          :error="$v.entity.link_speed.$invalid"
                                          label="Velocidad del Enlace"
                                          emit-value map-options option-value="id" option-label="description"
                                          options-dense hide-bottom-space/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8 col-xs-12 col-sm-12">
                        <div class="row q-col-gutter-sm justify-center">
                            <div class="col-md-6 col-xs-12 col-sm-12">
                                <q-input v-model="entity.email_domain" dense label="Dominio de Correo"
                                         hide-bottom-space/>
                            </div>
                            <div class="col-md-6 col-xs-12 col-sm-12">
                                <q-input v-model="entity.email_server" dense label="Servidor de Correo"
                                         hide-bottom-space/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8 col-xs-12 col-sm-12">
                        <div class="row q-col-gutter-sm justify-center">
                            <div class="col-md-6 col-xs-12 col-sm-12">
                                <q-input v-model="entity.proxy_server" dense label="Servidor Proxy"
                                         hide-bottom-space/>
                            </div>
                            <div class="col-md-6 col-xs-12 col-sm-12">
                                <q-input v-model="entity.phone_anchor" dense label="Teléfono de Anclaje"
                                         hide-bottom-space/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8 col-xs-12 col-sm-12">
                        <div class="row q-col-gutter-sm justify-center">
                            <div class="col-md-6 col-xs-12 col-sm-12">
                                <q-input v-model="entity.cac" dense label="Orden CAC"
                                         hide-bottom-space/>
                            </div>
                            <div class="col-md-6 col-xs-12 col-sm-12">
                                <q-input v-model="entity.entity_date" dense label="Fecha de la Entidad"
                                         hide-bottom-space>
                                    <template v-slot:default>
                                        <q-menu ref="qstartProxy" anchor="top left" self="top left"
                                                transition-show="scale"
                                                transition-hide="scale">
                                            <q-date minimal v-model="entity.entity_date" mask="DD/MM/YYYY"
                                                    @input="() => $refs.qstartProxy.hide()"/>
                                        </q-menu>
                                    </template>
                                </q-input>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8 col-xs-12 col-sm-12">
                        <div class="row q-col-gutter-sm justify-center">
                            <div class="col-md-6 col-xs-12 col-sm-12">
                                <q-select v-model="entity.link_provider" :options="links_provider" dense
                                          label="Proveedor del Enlace"
                                          emit-value map-options
                                          options-dense hide-bottom-space/>
                            </div>
                            <div class="col-md-6 col-xs-12 col-sm-12">
                                <q-select v-model="$v.entity.resource_type.$model" :options="resources" dense
                                          :error="$v.entity.resource_type.$invalid"
                                          label="Tipo de Recurso"
                                          emit-value option-value="id" option-label="description" map-options
                                          options-dense hide-bottom-space/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8 col-xs-12 col-sm-12">
                        <div class="row q-col-gutter-sm justify-center">
                            <div class="col-md-6 col-xs-12 col-sm-12">
                                <q-select v-model="$v.entity.province.$model" :options="provinces" dense
                                          label="Provincia"
                                          :error="$v.entity.province.$invalid"
                                          emit-value option-value="id" option-label="description" map-options
                                          options-dense hide-bottom-space/>
                            </div>
                            <div class="col-md-6 col-xs-12 col-sm-12">
                                <q-select v-model="$v.entity.municipality.$model" :options="municipalities" dense
                                          :error="$v.entity.municipality.$invalid"
                                          label="Municipio"
                                          emit-value option-value="id" option-label="description" map-options
                                          options-dense hide-bottom-space/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8 col-xs-12 col-sm-12 bg-grey-11">
                        <div class="row q-col-gutter-sm justify-center">
                            <div class="col-md-3 col-xs-12 col-sm-12 flex flex-center">
                                <q-checkbox true-value="1" false-value="0" v-model="entity.rlan" dense label="RLAN"/>
                            </div>
                            <div class="col-md-9 col-xs-12 col-sm-12">
                                <q-input type="textarea" v-model="entity.rlan_permissions" dense
                                         label="Autorizos RLAN"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8 col-xs-12 col-sm-12">
                        <div class="row q-col-gutter-sm justify-center">
                            <div class="col-md-3 col-xs-12 col-sm-12 flex flex-center">
                                <q-checkbox true-value="1" false-value="0" v-model="entity.vpn" dense label="VPN"/>
                            </div>
                            <div class="col-md-9 col-xs-12 col-sm-12">
                                <q-input type="textarea" v-model="entity.vpn_permissions" dense label="Autorizos VPN"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8 col-xs-12 col-sm-12 bg-grey-11">
                        <div class="row q-col-gutter-sm justify-center">
                            <div class="col-md-3 col-xs-12 col-sm-12 flex flex-center">
                                <q-checkbox true-value="1" false-value="0" v-model="entity.plc" dense label="PLC"/>
                            </div>
                            <div class="col-md-9 col-xs-12 col-sm-12">
                                <q-input type="textarea" v-model="entity.plc_permissions" dense label="Autorizos PLC"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8 col-xs-12 col-sm-12">
                        <div class="row q-col-gutter-sm justify-center">
                            <div class="col-md-3 col-xs-12 col-sm-12 flex flex-center">
                                <q-checkbox true-value="1" false-value="0" v-model="entity.voip" dense label="VoIP"/>
                            </div>
                            <div class="col-md-9 col-xs-12 col-sm-12">
                                <q-input type="textarea" v-model="entity.voip_permissions" dense
                                         label="Autorizos VoIP"/>
                            </div>
                        </div>
                    </div>
                </div>
            </q-card-section>
        </q-card>
    </q-page>
</template>

<script>
    import * as res from '../resources'
    import {integer, minLength, required} from 'vuelidate/lib/validators'
    import {Error, Success} from "../helpers";

    function initEntity() {
        return {
            id: null,
            name: null,
            address: null,
            workstations: 0,
            users: 0,
            link_type: 1,
            link_speed: null,
            rlan: '0',
            rlan_permissions: null,
            vpn: '0',
            vpn_permissions: null,
            plc: '0',
            plc_permissions: null,
            voip: '0',
            voip_permissions: null,
            link_provider: 1,
            resource_type: null,
            province: null,
            municipality: null,
            email_domain: null,
            email_server: null,
            proxy_server: null,
            phone_anchor: null,
            cac: null,
            entity_date: null,
        }
    }

    export default {
        name: "entities_ne",
        data() {
            return {
                action: 'store',
                entity: initEntity(),
                links_type: [
                    {label: 'Arrendado', value: 1},
                    {label: 'Conmutado', value: 2}
                ],
                links_provider: [
                    {label: 'ETECSA', value: 1},
                    {label: 'GET Oficina Central', value: 2},
                    {label: 'GET Varadero', value: 3}
                ],
                provinces: [],
                municipalities: [],
                oMunicipalities: [],
                speeds: [],
                resources: []
            }
        },
        validations: {
            entity: {
                name: {required, minLength: minLength(3)},
                address: {required, minLength: minLength(3)},
                workstations: {required, integer},
                users: {required, integer},
                link_speed: {required},
                resource_type: {required},
                province: {required},
                municipality: {required}
            }
        },
        watch: {
            'entity.province': function (nv) {
                this.entity.municipality = null;
                if (nv == null) {
                    this.municipalities = [];
                    return;
                }
                this.municipalities = this.$ld.filter(this.oMunicipalities, {province: nv});
            }
        },
        computed: {
            caption() {
                return this.action === 'store' ? 'Crear Entidad' : 'Editar Entidad';
            }
        },
        methods: {
            getEntity(id) {
                this.$axios.post('/api/entity/get', {id}).then(r => {
                    if (r.data.code !== 'Ok') return Error.call(this, res.eGetEntity);
                    let mun = r.data.entity.municipality;
                    Object.assign(this.entity, r.data.entity);
                    this.$nextTick(_ => {
                        this.entity.municipality = mun;
                    });
                }).catch(e => {
                    console.error(e);
                    Error.call(this, res.eGetEntity)
                })
            },
            getForSelect() {
                return this.$axios.post('/api/entities/forselect').then(r => {
                    if (r.data.code !== 'Ok') return Error.call(this, res.eGetData);
                    this.provinces = r.data.provinces;
                    this.oMunicipalities = r.data.municipalities;
                    this.speeds = r.data.speeds;
                    this.resources = r.data.resources;
                }).catch(e => {
                    console.error(e);
                    Error.call(this, res.eGetData);
                })
            },
            initAction(action) {
                this.action = action;
                switch (this.action) {
                    case 'store':
                        this.entity = initEntity();
                        break;
                    case 'update':
                        this.getEntity(this.$route.query.owl);
                        break;
                    default:
                        this.$router.push('/');
                }
            },
            save () {
                let urlAction = '/api/entity/' + this.action,
                    msg = this.action === 'store' ? [res.eStoreEntity, res.sStoreEntity] : [res.eUpdateEntity, res.sUpdateEntity];
                this.$axios.post(urlAction, {...this.entity}).then(r => {
                    if (r.data.code !== 'Ok') return Error.call(this, msg[0]);
                    Success.call(this, msg[1]);
                    this.$router.push('/entities');
                }).catch(e => {
                    console.error(e);
                    Error.call(this, msg[0]);
                });
            }
        },
        async mounted() {
            await this.getForSelect();
            this.initAction(this.$route.params.action);
        }
    }
</script>