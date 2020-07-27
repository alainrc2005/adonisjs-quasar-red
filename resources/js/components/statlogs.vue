<template>
    <q-card inline class="text-white" :class="classes">
        <q-card-section class="q-py-xs">
            <div class="row">
                <div class="col q-py-xs">
                    <q-btn size="lg" round class="shadow-24 icon-font" :icon="icon" @click="send()"/>
                </div>
                <div class="col text-right">
                    <div class="count-font">{{ count }}</div>
                    {{ caption }}
                </div>
            </div>
        </q-card-section>
        <q-separator/>
        <q-card-actions class="q-py-none">
            <q-btn flat @click="$emit('clickedFilter')">Filtrar</q-btn>
            <q-space/>
            <q-btn round flat icon="arrow_forward" @click="send()"/>
        </q-card-actions>
    </q-card>
</template>

<script>
    export default {
        name: "statlogs",
        props: ['classes', 'icon', 'count', 'caption', 'link']
    }
</script>

<style scoped>
    .icon-font {
        font-size: 4.4em
    }

    .count-font {
        font-size: 2.5em
    }
</style>
