<template lang="pug">
    .b-users
        .b-users__inner.dropdown-toggle
            .b-users__avatar
                img(src="@/admin/assets/img/ava.jpg")
            .b-users__nick
                p Admin
        .b-users__actions
            ul
                li LogIn
                li LogOut
</template>
<script>
export default {

    data() {
        return {}
    }
}
</script>
<style lang="scss" src="./style.scss">
</style>