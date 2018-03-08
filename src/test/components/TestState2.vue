<template>
    <div class="test-state-2">
        <button v-on:click="incrementAsync">incrementAsync</button>
        <h5>{{count}}</h5>
    </div>
</template>

<script>
    import { mapState, mapMutations, mapActions } from 'vuex';

    export default {
        computed: {
            ...mapState([
                'count'
            ])
        },
        methods: {
            // ...mapMutations([
            //     'increment'
            // ])
            ...mapActions([
                'incrementAsync'
            ])
        }
    }
</script>
