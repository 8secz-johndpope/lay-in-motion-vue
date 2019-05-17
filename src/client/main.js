import Vue from 'vue'
import App from './App.vue'
import Routes from './routes'
import { store } from './store'


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router: Routes,
    store
}).$mount('#app')