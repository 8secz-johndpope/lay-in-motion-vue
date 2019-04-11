<template lang="pug">
	.s-articles
		h3.s-articles__title All Posts		
		articleItem( :articles="articles" )
</template>

<script>
import articleItem from '../articleItem/index';
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
		articleItem
	}
}
</script>

<style lang="scss" scoped src="./style.scss">

</style>