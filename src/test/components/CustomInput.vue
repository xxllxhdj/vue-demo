<template>
    <span>
        <input type="text" ref="input" v-bind:value="value" v-on:input="update($event.target.value)">
    </span>
</template>

<script>
    export default {
        props: {
            value: String
        },
        methods: {
            update: function (value) {
                var tmp = value.replace(/,/g, '');
                tmp = tmp.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
                this.$refs.input.value = tmp;
                this.$emit('input', tmp);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>

