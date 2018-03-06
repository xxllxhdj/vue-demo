<template>
    <div class="test">
        <left-side></left-side>
        <center-content></center-content>
    </div>
</template>

<script>
    import LeftSide from '../test/layouts/LeftSide';
    import CenterContent from '../test/layouts/CenterContent';

    export default {
        name: 'test',
        components: {
            LeftSide,
            CenterContent
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .test {
        display: flex;
        min-height: 100vh;
        max-width: 100%;
        position: relative;
    }

    
    .test-card {
        border: 1px solid #ddd;
        padding: 10px;
    }
    .test-card + .test-card {
        margin-top: 10px;
    }
</style>
