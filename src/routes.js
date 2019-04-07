import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import Views  from './admin/views/';


const routes = [
	{path: '/', component: Views}
]

const router = new VueRouter({
	routes,
	mode: 'history'
});



export default router;