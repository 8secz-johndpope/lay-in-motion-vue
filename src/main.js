import Vue from 'vue'
import App from './admin/App.vue'
import Routes from './routes'
import { store } from './admin/store'


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router: Routes,
    store
}).$mount('#app')