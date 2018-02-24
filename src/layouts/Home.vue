<template>
    <div class="home">
        <img src="../assets/logo.png">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'home',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .home {
        text-align: center;
    }
</style>
