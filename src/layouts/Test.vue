<template>
    <div class="test">
        <left-side></left-side>
        <center-content></center-content>
    </div>
</template>

<script>
    import LeftSide from '../test/views/LeftSide';
    import CenterContent from '../test/views/CenterContent';

    export default {
        name: 'test',
        components: {
            LeftSide,
            CenterContent
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .test {
        display: flex;
        min-height: 100vh;
        max-width: 100%;
        position: relative;
    }
</style>
