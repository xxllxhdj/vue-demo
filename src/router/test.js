
export default [{
    path: '/test/component',
    name: 'component',
    component: () => import(/* webpackChunkName: "test" */'../test/views/ComponentView.vue')
}, {
    path: '/test/transition',
    name: 'transition',
    component: () => import(/* webpackChunkName: "test" */'../test/views/TransitionView.vue')
}, {
    path: '/test/directive',
    name: 'directive',
    component: () => import(/* webpackChunkName: "test" */'../test/views/DirectiveView.vue')
}, {
    path: '/test/state',
    name: 'state',
    component: () => import(/* webpackChunkName: "test" */'../test/views/StateView.vue')
}];
