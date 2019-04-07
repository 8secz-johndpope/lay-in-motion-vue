<template lang="pug">
	
	.s-articles
		h3.s-articles__title All Posts		
		articleItem
</template>

<script>

import articleItem from '../articleItem/index.vue';

export default {
	data () {
		return {
		}
	},
	components: {
		articleItem
	}
}
</script>

<style lang="scss" scoped src="./style.scss">

</style>