<template>
    <div class="test-state-2">
        <button v-on:click="incrementAsync">{{count}}</button>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex'

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
