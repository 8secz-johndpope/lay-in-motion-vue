import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home/index'
import Contacts from '@/components/Contacts/index'

Vue.use(VueRouter)

const routes = [

	{
		path: '',
		name: 'home',
		component: Home
	},
	{
		path: '/contacts',
		name: 'contacts',
		component: Contacts
	}
]

const router = new VueRouter({
	routes,
	mode: 'history'
});

export default router;