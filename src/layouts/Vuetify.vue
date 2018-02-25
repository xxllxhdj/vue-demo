<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.width > 1024" mobile-break-point="1024" absolute overflow app>
            <v-list class="nav-list">
                <v-list-group v-for="item in items" :value="item.active" v-bind:key="item.title">
                    <v-list-tile ripple slot="item">
                        <v-list-tile-action>
                            <v-icon>{{ item.action }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon>keyboard_arrow_down</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-list-tile v-for="subItem in item.items" v-bind:key="subItem.title" ripple :to="subItem.href">
                        <v-list-tile-content>
                            <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar color="primary" dark app absolute clipped-left height="56">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <!-- <v-toolbar-title>Vuetify</v-toolbar-title> -->
            <v-toolbar-title>
                <router-link to="/">Vuetify</router-link>
            </v-toolbar-title>
        </v-toolbar>
        <v-content>
            <v-container fluid class="view-container">
                <!-- <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition> -->
                <v-fade-transition mode="out-in">
                    <router-view></router-view>
                </v-fade-transition>
                <!-- <v-slide-y-transition mode="out-in">
                    <router-view></router-view>
                </v-slide-y-transition> -->
            </v-container>
        </v-content>
        <!-- <v-footer app>
                <span>&copy; {{ new Date().getFullYear() }}</span>
            </v-footer> -->
    </v-app>
</template>

<script>
    export default {
        name: 'vuetify',
        data: () => ({
            drawer: true,
            items: [{
                action: 'local_activity',
                title: 'Layout',
                items: [{
                        title: 'Grid',
                        href: '/layout/grid'
                    },
                    {
                        title: 'Alignment',
                        href: '/layout/alignment'
                    },
                    {
                        title: 'Display',
                        href: '/layout/display'
                    },
                    {
                        title: 'Elevation',
                        href: '/layout/elevation'
                    }
                ]
            }]
        })
    }
</script>

<style lang="scss" scoped>
    .navigation-drawer {
        padding-bottom: 0;
    }
    .nav-list {
        padding-top: 0;
        padding-bottom: 0;
    }

    .toolbar__title a {
        color: #fff;
        text-decoration: none;
    }

    .view-container > *:only-child {
        padding: 0;
    }

    // .slide-enter-active, .slide-leave-active {
    //     transition: all .3s ease;
    // }
    // .slide-enter, .slide-leave-to {
    //     opacity: 0;
    // }
    // .slide-enter {
    //     transform: translateX(-3rem);
    // }
    // .slide-leave-to {
    //     transform: translateX(3rem);
    // }

    // .slide-enter-active {
    //     transition: all .5s cubic-bezier(0.36, 0.66, 0.04, 1);
    // }
    // .slide-enter, .slide-leave-to {
    //     opacity: 0;
    // }
    // .slide-enter {
    //     transform: translateX(-100%);
    // }
    // .slide-leave-active {
    //     transition: all .2s cubic-bezier(0.4, 0.6, 0.2, 1);
    // }
    // .slide-leave-to {
    //     transform: translateX(100%);
    // }
</style>
