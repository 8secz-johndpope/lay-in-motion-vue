<template lang="pug">
	aside.panel-sidebar
		ul.nav
			router-link(to="/" exact tag="li" active-class="active").nav-item 
				p.nav-link Home
			router-link(to="/contacts" tag="li" active-class="active").nav-item
				p.nav-link  Contacts


</template>

<script>
import Blog from '../Blog/index';
import Contacts from '@/components/Contacts/index';

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
		Contacts
	}

}
</script>

<style lang="scss" src="./style.scss"></style>