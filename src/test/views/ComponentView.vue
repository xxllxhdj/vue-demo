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
            <h5>{{str}}</h5>
            <custom-input v-model="str"></custom-input>
        </div>
        <div class="test-card">
            <h4>具名插槽</h4>
            <simple-card>
                <template slot="header">
                    <h3>一级标题</h3>
                    <h4>二级标题</h4>
                </template>
                <p>主要内容的一个段落。</p>
                <p>另一个主要段落。</p>
                <h4 slot="footer">脚注</h4>
            </simple-card>
        </div>
    </div>
</template>

<script>
    import ButtonCounter from '../components/ButtonCounter';
    import CustomInput from '../components/CustomInput';
    import SimpleCard from '../components/SimpleCard';
    
    export default {
        components: {
            ButtonCounter,
            CustomInput,
            SimpleCard
        },
        data: function () {
            return { str: '0' }
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
