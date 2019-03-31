import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import View  from './admin/view/index.vue';
import Blogs  from './admin/components/articlesList/index.vue';
import addPost  from './admin/components/createPost/';


const routes = [
	{path: '/', component: View},
	{path: '/blog', component: Blogs},
	{path: '/addPost', component: addPost}
]

const router = new VueRouter({
	routes,
	mode: 'history'
});



export default router;