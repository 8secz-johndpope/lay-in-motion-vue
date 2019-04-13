<template lang=pug>
	.panel-wrapper
		appHeader
		aside.panel-sidebar
			.logo
				img(src="@/admin/assets/img/logo.png")
			ul.nav
				li.nav-item
					button(v-on:click="componentLinks='Create'").nav-link 
						p createPost
				li.nav-item
					button(v-on:click="componentLinks='Blog'").nav-link 
						p Blog
		.panel-content
			component(:is="componentLinks")

</template>

<script>
import appHeader from '../components/Header/index';
import Create from '../components/Create/index';
import Blog from '../components/Blog/index';
import sidebar from '../components/Sidebar/index';

export default {

	data () {
		return {
			componentLinks: {
				Create,
				Blog
			}
		}
	},
	components: {
		appHeader,
		Create,
		Blog,
		sidebar
    }
}
</script>

<style lang="scss" src="./style.scss">
</style>