<template lang="pug">
	.form-creat.grid
		.row
			.col-md-12.col-lg-9
				.card
					.form-wrap
						form(v-if="!submitted").form
							formFields
								slot(name="input")
								slot(name="textareas")
							.form-group
								button(type="button" v-on:click.prevent="send").form-btn Add post
			.col-md-12.col-lg-3
				.card
					.card__header
						h6 Tags
					.card__body
						.form-checkboxes.checkboxes(v-for="(tag, index) in tags")
							label(:for="index").checkboxes__label
								input(type="checkbox" :id="index" :value=" tag " v-model="post.tags").checkboxes__input
								span  {{ tag }}
					.card__bottom
						.form-group
								.input-group
									input(v-model.lazy="post.tag" type="text" id='title-input').form-field
									label(for="title-input").form-label New Tag
				.form-group
					.form-select
						label Author
						select(v-model="post.author")
							option(v-for="author in authors") {{ author }}
			
		div(v-if="submitted")
			h3 Статья добавленна.
		button(v-if="submitted" type="button" v-on:click.prevent="add").add-btn Add new post
</template>

<script>
import formFields from '../Input/index'

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

<style lang="scss" src="./style.scss">
</style>