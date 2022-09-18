import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store/index'

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
window.vm = new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})