import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Notebooks from '@/components/NotebookList'
import NoteDetail from '@/components/NoteDetail'
import Trash from '@/components/TrashDetail'

const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/notebooks',
            component: Notebooks
        },
        {
            path: '/note',
            component: NoteDetail
        },
        {
            path: '/trash',
            component: Trash
        }
    ]
})