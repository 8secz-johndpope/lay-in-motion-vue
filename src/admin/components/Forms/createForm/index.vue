<template lang="pug">
	.form-creat

		form
			formFields
				slot(name="input")
				slot(name="textarea")
			.form-group
				.form-checkboxes(v-for="tag in tags")
					label(v-bind:for="tag" ) {{ tag }}
						input(type="checkbox" v-bind:id="tag" ) 
			.form-group
				button(type="button").form-btn Add post		
</template>

<script>
import formFields from '../Input/idnex.vue'

export default {
	data() {
		return {
			tags:[
				'X-Particles',
				'Cycles 4D',
				'MoGraph',
				'C4D',
				'Ae',
				'Ph'
			]
		}
	}, 
	components: {
		formFields
	}

}
</script>

<style lang="scss" scoped src="./style.scss">
</style>