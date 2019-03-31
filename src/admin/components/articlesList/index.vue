<template lang="pug">
	
	.s-articles
		pre {{ articles }}
		h3.s-articles-title All Posts
		ul.s-articles-list()
			li.s-articles-item
				.post-content
					h5.post-title
		
</template>

<script>
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
		//console.log(this.$store);
	}
}
</script>

<style lang="scss" scoped src="./style.scss">

</style>