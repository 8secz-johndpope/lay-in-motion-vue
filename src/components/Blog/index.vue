<template lang="pug">
	.s-blog
		h2.s-blog__title All Posts		
		BlogItem( :articles="articles" )
</template>

<script>
import BlogItem from '../BlogItem/index';
import { mapActions, mapGetters } from 'vuex';

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
	components: {
		BlogItem
	}
}
</script>

<style lang="scss" scoped src="./style.scss">

</style>