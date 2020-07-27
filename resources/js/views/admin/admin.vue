<template>
    <transition enter-active-class="animated zoomIn">
        <router-view></router-view>
    </transition>
</template>

<script>
    export default {
        name: "admin"
    }
</script>