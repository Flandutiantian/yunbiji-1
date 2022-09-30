import Vue from 'vue'
import Router from 'vue-router'

const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            alias: '/notebooks',
            component: () => import('@/components/NotebookList.vue')
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('@/components/Login.vue')
        },
        {
            path: '/note',
            component: () => import('@/components/NoteDetail.vue')
        },
        {
            path: '/trash',
            component: () => import('@/components/TrashDetail.vue')
        }
    ]
})