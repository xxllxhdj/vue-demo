import Vue from 'vue';
import Router from 'vue-router';

import HomeView from './home/views/HomeView.vue';

Vue.use(Router);

const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        // savedPosition is only available for popstate navigations.
        return savedPosition;
    } else {
        const position = {};
        // new navigation.
        // scroll to anchor by returning the selector
        if (to.hash) {
            position.selector = to.hash;
        }
        // check if any matched route config has meta that requires scrolling to top
        if (to.matched.some(m => m.meta.scrollToTop)) {
            // cords will be used if no selector is provided,
            // or if the selector didn't match any element.
            position.x = 0;
            position.y = 0;
        }
        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return position;
    }
};

const testRouter = [{
    path: '/test/component',
    name: 'component',
    component: () => import(/* webpackChunkName: "test" */'./test/views/ComponentView.vue')
}, {
    path: '/test/transition',
    name: 'transition',
    component: () => import(/* webpackChunkName: "test" */'./test/views/TransitionView.vue')
}, {
    path: '/test/directive',
    name: 'directive',
    component: () => import(/* webpackChunkName: "test" */'./test/views/DirectiveView.vue')
}];

const vuetifyRouter = [{
    path: '/vuetify/layout/grid',
    name: 'grid',
    component: () => import(/* webpackChunkName: "vuetify" */'./vuetify/views/GridView.vue')
}, {
    path: '/vuetify/layout/alignment',
    name: 'alignment',
    component: () => import(/* webpackChunkName: "vuetify" */'./vuetify/views/AlignmentView.vue')
}];

export default new Router({
    mode: 'history',
    scrollBehavior,
    routes: [{
        path: '/',
        name: 'home',
        component: HomeView
    }, ...testRouter, ...vuetifyRouter, {
        path: '*',
        redirect: '/'
    }]
});
