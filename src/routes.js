import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import Views  from './admin/views/index';
import Create  from './admin/components/Create/index';
import Blog  from './admin/components/Blog/index';


const routes = [
	{path: '/', component: Views},
	{path: '/add', component: Create},
	{path: '/Blog', component: Blog}
]

const router = new VueRouter({
	routes,
	mode: 'history'
});



export default router;