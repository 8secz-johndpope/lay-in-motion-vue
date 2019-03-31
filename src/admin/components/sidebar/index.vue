<template lang="pug">
	aside.panel-sidebar
		.nav-title
			p Dashboard
		ul.nav
			li.nav-item(v-for='section in sections')
				router-link(v-bind:to='/blog/').nav-link 
					p {{ section }}
</template>

<script>

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
			]
		}
	},

}
</script>

<style lang="scss" scoped src="./style.scss"></style>