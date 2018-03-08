<template>
    <div class="test-state-1">
        <button v-on:click="increment">increment</button>
        <h5>{{formatCount}}</h5>
    </div>
</template>

<script>
    import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';

    export default {
        computed: {
            ...mapState([
                'count'
            ]),
            ...mapGetters([
                'formatCount'
            ])
        },
        methods: {
            // ...mapMutations([
            //     'increment'
            // ])
            ...mapActions([
                'increment'
            ])
        }
    }
</script>
