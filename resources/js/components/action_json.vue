<template>
    <q-dialog ref="d_json">
        <q-card class="q-dialog-plugin">
            <q-card-section class="row no-padding">
                <q-toolbar class="bg-primary text-white">
                    <q-toolbar-title>Detalle de la Acción</q-toolbar-title>
                    <q-btn round dense flat icon="close" v-close-popup>
                        <q-tooltip>Cerrar</q-tooltip>
                    </q-btn>
                </q-toolbar>
            </q-card-section>
            <q-card-section>
                <pre>{{json}}</pre>
            </q-card-section>
        </q-card>
    </q-dialog>
</template>

<script>
    export default {
        name: "action_json",
        data() {
            return {
                json: null,
            }
        },
        methods: {
            show(details) {
                if (details==null) {
                    this.json = 'La acción no requiere detalles';
                    return this.$refs.d_json.show();
                }
                this.json = JSON.parse(details);
                if (this.json===null) this.json=details;
                this.$refs.d_json.show();
            }
        }
    }
</script>
