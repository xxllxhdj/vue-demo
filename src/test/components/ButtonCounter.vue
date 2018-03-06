<template>
    <div class="button-counter">
        <button @click="countFn">{{count}}</button>
    </div>
</template>

<script>
    export default {
        props: {
            initCount: Number
        },
        data: function () {
            return { count: this.initCount || 0 };
        },
        methods: {
            countFn: function () {
                this.count++;
                this.$emit('increment', this.count);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>

