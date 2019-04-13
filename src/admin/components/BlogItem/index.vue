<template lang=pug>
	.b-blog
		.b-blog(v-for="post in articles")
			h5.b-blog__title {{ post.title }}
			.b-blog__content {{ post.content }}
			ul.b-blog__tags
				li(v-for="tag in post.tags") {{ tag }}
			.b-blog__author
				p Author of the post: 
					span {{ post.author }}
</template>

<script>

export default {
	props: ['articles'],
	data () {
		return {
		}
	}
}
</script>

<style lang="scss" src="./style.scss">
</style>