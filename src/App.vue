<template>
    <div id="app">
        <v-fade-transition mode="out-in">
            <component :is="component">
                <slot></slot>
            </component>
        </v-fade-transition>
    </div>
</template>

<script>
    import Home from './layouts/Home';
    import Test from './layouts/Test';
    import Vuetify from './layouts/Vuetify';

    export default {
        name: 'app',
        components: {
            Home,
            Vuetify,
            Test
        },
        computed: {
            component () {
                if (this.$route.path === '/') {
                    return 'home';
                }
                if (this.$route.path.startsWith('/test')) {
                    return 'test';
                }
                return 'vuetify';
            }
        }
    }
</script>

<style lang="scss">
    html {
        overflow-y: auto;
    }
</style>
