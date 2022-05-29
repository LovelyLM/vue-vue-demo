import {createRouter, createWebHashHistory} from 'vue-router'

import HomeView from '../views/HomeView.vue'
import Study from '../views/StudyView.vue'
import Button from '../views/ButtonView.vue'

/**
 *  公开路由表
 */
const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/study',
        component: Study
    },
    {
        path: '/button',
        component: Button
    },
    {
        path: '/about',
        component: () => import('../views/AboutView.vue')
    },
    {
        path: '/movie',
        component: () => import('../views/MovieView.vue')
    },
    {
        path: '/login',
        component: () => import('../views/login/IndexView')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
