<template lang="pug">
    header.panel-header
        .panel-header__inner
            search
            users
</template>
<script>
import search from '../Search/index';
import users from '../Users/index';

export default {

    data() {
        return {}
    },
    components: {
        users,
        search
    }
}
</script>
<style lang="scss" src="./style.scss">
</style>