<template>
    <div class="center-content">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'centerContent'
    }
</script>

<style scoped>
    .center-content {
        flex: 1 1 auto;
        padding: 10px 10px 10px 310px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
