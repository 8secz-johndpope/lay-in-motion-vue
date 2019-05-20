<template lang="pug">
	#app
		appHeader
		Navbar
		//router-view
</template>

<script>
import appHeader from '@/components/Header/index';
import Blog from '@/components/Blog/index';
import Navbar from '@/components/Navbar/index';


export default {
	data() {
		return {}
	},
	components: {
		appHeader,
		Blog,
		Navbar
	}
}
</script>
<style lang="scss">
	@import '@/stylesheets/main.scss';
</style>