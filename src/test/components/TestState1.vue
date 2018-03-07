<template>
    <div class="test-state-1">
        <button v-on:click="increment">{{count}}</button>
        <h5>{{formatCount}}</h5>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import { mapMutations } from 'vuex';
    import { mapGetters } from 'vuex';
    import { mapActions } from 'vuex'

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
