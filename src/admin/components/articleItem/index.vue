<template lang=pug>
	.b-articles
		.b-article(v-for="post in articles")
			h5.b-article__title {{ post.title }}
			.b-article__content {{ post.content }}
			ul.b-article__tags
				li(v-for="tag in post.tags") {{ tag }}
			.b-article__author
				p Author of the post: 
					span {{ post.author }}
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
export default {
	data () {
		return {

		}
	},
	computed: {
		...mapGetters(['articles'])
	},
	methods: {
		...mapActions(['fetchArticels'])
	},
	created() {
		this.fetchArticels();
		/*this.$http.get('https://vue-playlist-7ea3c.firebaseio.com/posts.json').then(function(data){
			//console.log(data.body);
			this.articles = data.body;
		})*/
	},
}
</script>

<style lang="scss" scoped src="./style.scss">
</style>