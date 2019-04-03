<template lang=pug>
	.panel-wrapper
		breadcrumb
		sidebar
		//aside.panel-sidebar
			ul.nav
				li.nav-item
					button(v-on:click="component='createPost'").nav-link 
						p createPost
				li.nav-item
					button(v-on:click="component='Blog'").nav-link 
						p Blog
		.panel-content
			component(:is="componentLinks" :links="componentLinks")

</template>

<script>
import breadcrumb from '../components/breadcrumb/index.vue';
import sidebar from '../components/sidebar/index.vue';
import createPost from '../components/createPost/index.vue';
import Blog from '../components/articlesList/index.vue';

export default {

	data () {
		return {
			componentLinks: [
				{name: 'createPost'},
				{name: 'Blog'}
			]
		}
	},
	components: {
		sidebar,
		breadcrumb,
		createPost,
		Blog
    }
}
</script>

<style lang="scss" scoped src="./style.scss">
</style>