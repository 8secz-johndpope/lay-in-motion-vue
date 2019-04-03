<template lang="pug">
	aside.panel-sidebar
		pre {{ links }}
		ul.nav
			li.nav-item
				button(@click="componentLinks='Blog'").nav-link 
					p Blog
			li.nav-item
				button(@click="componentLinks='createPost'").nav-link 
					p createPost

</template>

<script>
import Blog from '../articlesList/index.vue';
import createPost from '../createPost/index.vue';

export default {
	data () {
		return {
			sections: [
				'New post',
				'Articles',
				'Media',
				'Docs',
				'Sotials',
				'Settings'
			],
/*			componentLinks: {
				createPost,
	    		Blog
			}*/
		}
	},
	props: ['links'],
	components: {
		Blog,
		createPost
	}

}
</script>

<style lang="scss" scoped src="./style.scss"></style>