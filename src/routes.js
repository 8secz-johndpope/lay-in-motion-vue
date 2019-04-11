import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import Views  from './admin/views/';
import addPost  from './admin/components/createPost/';
import Blog  from './admin/components/articlesList/';


const routes = [
	{path: '/', component: Views},
	{path: '/add', component: addPost},
	{path: '/Blog', component: Blog}
]

const router = new VueRouter({
	routes,
	mode: 'history'
});



export default router;