<template lang="pug">
	header.header
		.header__inner
			.logo
				img(src="@/assets/img/logo.png").logo-img
			search
</template>
<script>
import search from '../Search/index';

export default {

    data() {
        return {}
    },
    components: {
        search
    }
}
</script>
<style lang="scss" src="./style.scss">
</style>
