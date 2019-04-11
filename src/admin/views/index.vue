<template lang=pug>
	.panel-wrapper
		aside.panel-sidebar
			.logo
				img(src="@/admin/assets/img/logo.png")
			ul.nav
				li.nav-item
					button(v-on:click="componentLinks='createPost'").nav-link 
						p createPost
				li.nav-item
					button(v-on:click="componentLinks='Blog'").nav-link 
						p Blog
		.panel-content
			breadcrumb
			search
			component(:is="componentLinks")

</template>

<script>
import breadcrumb from '../components/breadcrumb/index';
import createPost from '../components/createPost/index';
import Blog from '../components/articlesList/index';
import sidebar from '../components/Sidebar/index';
import search from '../components/Search/index';

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
		Blog,
		sidebar,
		search
    }
}
</script>

<style lang="scss" scoped src="./style.scss">
</style>