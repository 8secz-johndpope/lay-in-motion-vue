<template lang=pug>
	.b-articles
		.b-article(v-for="post in articles")
			h5.b-article__title {{ post.title }}
			.b-article__content {{ post.content }}
			ul.b-article__tags
				li(v-for="tag in post.tags") {{ tag }}
			.b-article__author
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

<style lang="scss" scoped src="./style.scss">
</style>