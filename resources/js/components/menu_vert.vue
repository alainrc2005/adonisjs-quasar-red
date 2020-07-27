<template>
    <q-btn dense round flat icon="more_vert" class="q-mr-sm">
        <q-menu transition-show="scale"
                transition-hide="scale">
            <q-list dense>
                <q-item clickable v-close-popup @click="$emit('clkedit')">
                    <q-item-section side>
                        <q-icon color="positive" name="mdi-square-edit-outline"/>
                    </q-item-section>
                    <q-item-section>Editar</q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="$emit('clkremove')">
                    <q-item-section side>
                        <q-icon color="negative" name="mdi-delete"/>
                    </q-item-section>
                    <q-item-section>Eliminar</q-item-section>
                </q-item>
            </q-list>
        </q-menu>
    </q-btn>
</template>

<script>
    export default {
        name: "menu_vert"
    }
</script>
