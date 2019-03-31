const articles = {
	state: {
		data: []
	},
	getters: {
		articles(state) {
			return state.data
		}
	},
	actions: {
		fetchArticels({state, rootGetters}) {
			const { $http } = rootGetters;
			$http.get('https://vue-playlist-7ea3c.firebaseio.com/posts.json').then(response => {
				state.data = response.body;
			}, error => {
				console.log(error);
			});
		}
	}
}

export default articles;