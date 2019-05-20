import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex);
Vue.use(VueResource);

import articles from './modules/articles.js';


export const store = new Vuex.Store({
	getters: {
		$http: () => (VueResource)
	},
	modules: {
		articles
	}
})
