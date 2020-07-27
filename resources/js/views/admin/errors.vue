<template>
    <q-page padding class="q-ma-md">
        <div class="row q-gutter-lg justify-center">
            <div class="col-xs-10 col-sm-6 col-md-2">
                <stats classes="bg-blue-6 text-white" icon="mdi-alpha-d-box" caption="Día" :count="stats.day"
                       @clickedFilter="cardFilter('day')"/>
            </div>
        </div>
    </q-page>
</template>

<script>
    export default {
        name: "errors"
    }
</script>