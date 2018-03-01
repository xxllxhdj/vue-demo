<template>
    <div class="left-side">
        <div class="header">
            <router-link to="/">Vue测试</router-link>
        </div>
        <div class="content">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'leftSide'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .left-side {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 300px;
        max-width: 100%;
        border-right: 1px solid #ddd;
        display: flex;
        flex-direction: column;
    }

    .header {
        height: 44px;
        padding: 10px;
        text-align: center;
        font-size: 18px;
    }

    a {
        color: #42b983;
        text-decoration: none;
    }
    .header > a {
        color: #000;
    }

    .content {
        flex: 1 1 auto;
    }
</style>
