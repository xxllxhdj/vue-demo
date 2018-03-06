<template>
    <div class="component-view">
        <div class="test-card">
            <h4>基本组件</h4>
            <!-- <button-counter :init-count="6" @increment="onIncrement"></button-counter> -->
            <button-counter class="test-counter" v-on:click.native="onCounterClick"
                v-bind:init-count="6" v-on:increment="onIncrement">
            </button-counter>
        </div>
        <div class="test-card">
            <h4>vmodel组件</h4>
            <h5>{{num}}</h5>
            <custom-input v-model="num"></custom-input>
        </div>
    </div>
</template>

<script>
    import ButtonCounter from '../components/ButtonCounter';
    import CustomInput from '../components/CustomInput';
    
    export default {
        components: {
            ButtonCounter,
            CustomInput
        },
        data: function () {
            return { num: 0 }
        },
        methods: {
            onIncrement: function (a, b) {
                // console.log('asdasd');
            },
            onCounterClick: function () {
                // console.log('asdasd');
            }
        }
    }
</script>

<style>

</style>
