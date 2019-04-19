<template lang="pug">
    .b-users
        .b-users__inner.dropdown-toggle(@click="toggleDropdown($event)")
            .b-users__avatar
                img(src="@/admin/assets/img/ava.gif")
            .b-users__nick
                p Admin
        .b-users__actions
            ul
                li 
                    a(href="") Profile
                li
                    a(href="") LogOut
</template>
<script>
export default {

    data() {
        return {
        }
    },
    methods: {
        toggleDropdown (event) {
            event.currentTarget.classList.toggle('is-active')
        }
    }
}
</script>
<style lang="scss" src="./style.scss">

.b-users__actions {
    
}
</style>