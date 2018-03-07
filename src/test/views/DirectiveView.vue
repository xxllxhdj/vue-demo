<template>
    <div class="directive-view">
        <div class="test-card">
            <h4>基础指令</h4>
            <div v-demo></div>
        </div>
        <div class="test-card">
            <h4 v-bkg-color="color">指令测试</h4>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'directiveView',
        data: function () {
            return { color: '#00ff00' };
        }
    }
</script>

<style scoped>
</style>
