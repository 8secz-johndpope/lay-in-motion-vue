<template lang="pug">
	.form-creat
		form
			.form-group
				.input-group
					input(type="text" id='title-input').form-field
					label(for="title-input").form-label Post's title
					i.bar
			.form-group
				.input-group
					textarea(type="textarea" id='message-input').form-field.form-textarea
					label(for="message-input").form-label Post's message
					i.bar
			.form-group
				.form-checkboxes(v-for="tag in tags")
					label(v-bind:for="tag" ) {{ tag }}
						input(type="checkbox" v-bind:id="tag" ) 
			.form-group
				button(type="button").form-btn Add post		
</template>

<script>

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

}
</script>

<style lang="scss" scoped src="./style.scss">
</style>