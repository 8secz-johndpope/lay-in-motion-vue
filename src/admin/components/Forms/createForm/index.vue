<template lang="pug">
	.form-creat
		form(v-if="!submitted")
			.form-group
				.input-group
					input(v-model.lazy="post.title" type="text" id='title-input').form-field
					label(for="title-input").form-label Post's title
					i.bar
			.form-group
				.input-group
					textarea(v-model.lazy="post.content" type="textarea" id='message-input').form-field.form-textarea
					label(for="message-input").form-label Post's message
					i.bar
			.form-group
				.form-checkboxes(v-for="tag in tags")
					label {{ tag }}
						input(type="checkbox" :value=" tag " v-model="post.tags") 
			.form-group
				.form-select
					label Author
					select(v-model="post.author")
						option(v-for="author in authors") {{ author }}
			.form-group
				button(type="button" v-on:click.prevent="send").form-btn Add post
		div(v-if="submitted")
			h3 Статья добавленна.
		button(v-if="submitted" type="button" v-on:click.prevent="add").add-btn Add new post
</template>

<script>
import formFields from '../Input/'

export default {
	data() {
		return {
			post: {
				title: '',
				content: '',
				tags:[],
				author: ''
			},
			tags:[
				'X-Particles',
				'Cycles 4D',
				'MoGraph',
				'C4D',
				'Ae',
				'Ph'
			],
			authors: [
				'LayInMotion',
				'Maxon',
				'Greyscalegorilla',
				'INSYDIUM'
			],
			submitted: false
		}
	}, 
	components: {
		formFields
	},
	methods: {
		send: function() {
			this.$http.post('https://vue-playlist-7ea3c.firebaseio.com/posts.json', {
				title: this.post.title,
				content: this.post.content,
				tags: this.post.tags,
				author: this.post.author
			}).then(function(data) {
				this.submitted = true
			})
		},
		add: function() {
			this.submitted = false,
			this.post.title = '', 
			this.post.content = '',
			this.post.tags = [],
			this.post.author = ''

		}
	}

}
</script>

<style lang="scss" scoped src="./style.scss">
</style>