<template lang=pug>
	.b-search
		.b-search__inner
			.b-search__group
				.b-search__icon
					svgSearchIcon
				input(
					type="text" 
					v-model="searchText" 
					placeholder="Поиск статьи..."
				).b-search__input

		//ul
			li(v-for="name in filtered" :key="name") {{ name }}
</template>

<script>
import svgSearchIcon from '@/../static/icons/search.svg';

export default {
	data () {
		return {
			names: ['android', 'Apple', 'cosmos', 'Cosmos', 'linux', 'rofo', 'super'],
			searchText: '',
		}
	},
	components: {
		svgSearchIcon
	}
	/*computed: {
		filtered() {
			return this.names.filter(name => {
				return name.toLowerCase().indexOf(this.searchText) !== -1
			})
		}
	}*/
}
</script>

<style lang="scss" src="./style.scss">
</style>