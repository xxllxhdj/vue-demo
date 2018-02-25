import Vue from 'vue';
import Router from 'vue-router';
import HomeView from './home/views/HomeView.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'home',
        component: HomeView
    }, {
        path: '/layout/grid',
        name: 'grid',
        component: () => import(/* webpackChunkName: "Layout" */'./vuetify/views/GridView.vue')
    }, {
        path: '/layout/alignment',
        name: 'alignment',
        component: () => import(/* webpackChunkName: "Layout" */'./vuetify/views/AlignmentView.vue')
    }]
});
