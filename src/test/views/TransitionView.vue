<template>
    <div class="test-transition">
        <div class="test-card">
            <h4>基本动效</h4>
            <!-- <button v-on:click="toggle()">toggle</button> -->
            <!-- <button @click="toggle()">toggle</button> -->
            <button v-on:click="show=!show">toggle</button>
            <transition name="fade">
                <p v-if="show">Message</p>
            </transition>
        </div>
        <div class="test-card">
            <h4>列表动效</h4>
            <button v-on:click="doShuffle()">shuffle</button>
            <transition-group name="list-complete" tag="p">
                <span v-for="item in list" :key="item" class="list-complete-item">{{item}}</span>
            </transition-group>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'testTransition',
        data: function () {
            return {
                show: true,
                list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
            };
        },
        methods: {
            toggle: function () {
                this.show = !this.show;
            },
            randomIndex: function (min, max) {
                return Math.floor(Math.random() * (max - min) + min);
            },
            shuffle: function (array, start) {
                start = start || 0;
                var len = array.length;
                if (start >= len - 1) {
                    return array;
                }
                var sIndex = this.randomIndex(start + 1, len),
                    t = array[start];
                array[start] = array[sIndex];
                array[sIndex] = t;

                start++;
                return this.shuffle(array, start);
            },
            doShuffle: function () {
                this.list = this.shuffle(this.list.slice(0));
            }
        }
    }
</script>

<style lang="scss" scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .list-complete-item {
        transition: all 1s;
        display: inline-block;
        margin-right: 10px;
    }
    .list-complete-enter, .list-complete-leave-to
    /* .list-complete-leave-active for below version 2.1.8 */ {
        opacity: 0;
        transform: translateY(30px);
    }
    .list-complete-leave-active {
        position: absolute;
    }
</style>
