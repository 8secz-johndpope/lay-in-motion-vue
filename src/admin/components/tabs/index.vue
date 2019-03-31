<template lang=pug>
	.tabs
		ul.tabs-list
			li.tabs-list-item(v-for="tab in tabs")
				a(href="").tabs-link Tab
</template>

<script>
export default {
	data () {
		return {
			tabs: [
				'Tab 1',
				'Tab 2',
				'Tab 3'
			]
		}
	}
}
</script>

<style lang="scss" scoped src="./style.scss">
</style>