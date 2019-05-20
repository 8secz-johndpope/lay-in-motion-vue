const articles = {
	state: {
		data: []
	},
	getters: {
		articles(state) {
			return state.data
		}
	},
/*	mutations: {
		addNewArticle(state, post) {
			state.data.push(post)
		}
	},*/
	actions: {
		fetchArticels({state, rootGetters}) {
			const { $http } = rootGetters;
			$http.get('https://vue-playlist-7ea3c.firebaseio.com/posts.json').then(response => {
				state.data = response.body;
			}, error => {
				console.log('Erorr');
			});
		}
	}
}

export default articles;