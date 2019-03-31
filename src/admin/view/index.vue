<template lang=pug>
	.panel-wrapper
		breadcrumb
		sidebar
		createPost
</template>

<script>
import breadcrumb from '../components/breadcrumb/index.vue';
import sidebar from '../components/sidebar/index.vue';
import createPost from '../components/createPost/index.vue';

export default {

	data () {
		return {
			
		}
	},
	components: {
        sidebar,
        breadcrumb,
        createPost
    }
}
</script>

<style lang="scss" scoped src="./style.scss">
</style>