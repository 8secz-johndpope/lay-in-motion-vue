<template lang=pug>
	.panel-wrapper
		breadcrumb
		aside.panel-sidebar
			ul.nav
				li.nav-item
					button(v-on:click="componentLinks='createPost'").nav-link 
						p createPost
				li.nav-item
					button(v-on:click="componentLinks='Blog'").nav-link 
						p Blog
		.panel-content
			component(:is="componentLinks")

</template>

<script>
import breadcrumb from '../components/breadcrumb/index.vue';
import createPost from '../components/createPost/index.vue';
import Blog from '../components/articlesList/index.vue';

export default {

	data () {
		return {
			componentLinks: {
				createPost,
				Blog
			}
		}
	},
	components: {
		breadcrumb,
		createPost,
		Blog
    }
}
</script>

<style lang="scss" scoped src="./style.scss">
</style>