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
    import Vuetify from './layouts/Vuetify';

    export default {
        name: 'app',
        components: {
            Home,
            Vuetify
        },
        computed: {
            component () {
                if (this.$route.path === '/') {
                    return 'home';
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
