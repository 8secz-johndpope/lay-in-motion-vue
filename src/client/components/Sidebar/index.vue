<template lang="pug">
	aside.panel-sidebar
		.logo
			img(src="@/assets/img/logo.png")
		ul.nav
			router-link(to="/" exact tag="li" active-class="active").nav-item 
				p.nav-link Blog
			router-link(to="/add" tag="li" active-class="active").nav-item
				p.nav-link  createPost
			router-link(to="/Blog" tag="li" active-class="active").nav-item
				p.nav-link  Blog


</template>

<script>
import Blog from '../Blog/index';
import createPost from '../Create/index';

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
	components: {
		Blog,
		createPost
	}

}
</script>

<style lang="scss" src="./style.scss"></style>