<template lang="pug">
	.panel-main
		.createPost
			createForm
</template>

<script>
import createForm from '../Forms/createForm/index.vue';

export default {
	data() {
		return {
		}
	},
	components: {
		createForm
	}
}
</script>

<style lang="scss" scoped src="./style.scss">
</style>