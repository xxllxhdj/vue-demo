
export default [{
    path: '/vuetify/layout/grid',
    name: 'grid',
    component: () => import(/* webpackChunkName: "vuetify" */'../vuetify/views/GridView.vue')
}, {
    path: '/vuetify/layout/alignment',
    name: 'alignment',
    component: () => import(/* webpackChunkName: "vuetify" */'../vuetify/views/AlignmentView.vue')
}];
