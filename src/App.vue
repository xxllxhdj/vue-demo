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
    import Default from './layouts/Default';
    import Home from './layouts/Home';

    export default {
        name: 'app',
        components: {
            Default,
            Home
        },
        computed: {
            component () {
                if (this.$route.path === '/') {
                    return 'home';
                }
                return 'default';
            }
        }
    }
</script>

<style lang="scss">
    html {
        overflow-y: auto;
    }
</style>
