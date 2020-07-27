<template>
    <q-card style="border-radius: 6px">
        <q-card-section>
            <div class="row">
                <div class="col-5 flex flex-center">
                    <q-icon :name="icon" size="42px" :color="iconColor"/>
                </div>
                <div class="col-7 text-right">
                    <span style="font-size: 16px">{{label}}</span><br/>
                    <span style="font-size: 2em; font-weight: bold">{{counter}}</span>
                </div>
            </div>
        </q-card-section>
        <q-separator />
        <q-card-actions class="no-padding">
            <q-btn rounded flat icon="mdi-arrow-down-bold-outline mdi-rotate-270" color="primary" :to="url"/>
            <q-space/>
            <q-btn rounded flat label="Ampliar" color="primary" :to="url"/>
        </q-card-actions>
    </q-card>
</template>

<script>
    export default {
        name: 'cardstat',
        props: {
            icon: {
                type: String,
                required: true
            },
            iconColor: {
                type: String,
                required: true
            },
            label: {
                type: String,
                required: true
            },
            counter: {
                type: Number,
                required: true
            },
            url: {
                type: String,
            }
        }
    }
</script>

<style scoped>

</style>