<template lang=pug>
	.panel-wrapper
		appHeader
		Blog

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