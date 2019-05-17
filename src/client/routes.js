import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import Views  from './views/index';
import Create  from './components/Create/index';
import Blog  from './components/Blog/index';


const routes = [
	{path: '/', component: Views},
	{path: '/add', component: Create},
	{path: '/blog', component: Blog}
]

const router = new VueRouter({
	routes,
	mode: 'history'
});



export default router;