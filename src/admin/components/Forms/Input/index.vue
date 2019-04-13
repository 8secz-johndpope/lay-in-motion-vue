<template lang="pug">
	.form-group-wrap
		.form-group(slot="inputs")
			.input-group
				input(type="text" id='title-input').form-field
				label(for="title-input").form-label Post's title
				i.bar
		.form-group(slot="textareas")
			.input-group
				textarea(type="textarea" id='message-input').form-field.form-textarea
				label(for="message-input").form-label Post's message
				i.bar
</template>

<script>


export default {
	data() {
		return {
			
		}
	}, 

}
</script>

<style lang="scss" src="./style.scss">
</style>