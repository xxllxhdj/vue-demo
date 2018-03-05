<template>
    <div class="component-view">
        <div class="test-card">
            <!-- <button-counter :init-count="6" @increment="onIncrement"></button-counter> -->
            <button-counter :init-count="6" @increment="onIncrement"></button-counter>
        </div>
    </div>
</template>

<script>
    import ButtonCounter from '../components/ButtonCounter';
    
    export default {
        data: function () {
            return {
                count: 6
            };
        },
        components: {
            ButtonCounter
        },
        methods: {
            onIncrement: function (a, b) {
                // console.log('asdasd');
            }
        }
    }
</script>

<style>

</style>
