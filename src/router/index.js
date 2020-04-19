import Vue from 'vue';
import Router from 'vue-router';
import pageA from '@/pages/page-a/index.vue';
import pageB from '@/pages/page-b/index.vue';
import pageUnit from '@/pages/page-unit/index.vue';
import pageOne from '@/pages/page-one/index.vue';

// 使用路由
Vue.use(Router);

// 导出路由模块
export default new Router({
    routes: [
        {
            path: '/a',
            name: 'pageA',
            component: pageA
        },
        {
            path: '/b',
            name: 'pageB',
            component: pageB
        },
        {
            path: '/unit',
            name: 'pageUnit',
            component: pageUnit
        },
        {
            path: '/',
            redirect: '/one'
        },
        {
            path: '/one',
            name: 'pageOne',
            component: pageOne
        },
        {
            path: '/two',
            name: 'pageTwo',
            component: () => import('@/pages/page-two/index.vue')
        },
        {
            path: '/three',
            name: 'pageThree',
            component: () => import('@/pages/page-three/index.vue')
        },
        {
            path: '/form',
            name: 'pageForm',
            component: () => import('@/pages/page-form/index.vue')
        },
        {
            path: '/table',
            name: 'pageTable',
            component: () => import('@/pages/page-table/index.vue')
        },
        {
            path: '/echart',
            name: 'pageEchart',
            component: () => import('@/pages/page-echart/index.vue')
        }
    ]
});
