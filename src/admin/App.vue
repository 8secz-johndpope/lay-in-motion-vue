<template lang="pug">
    #app
        router-view
</template>

<script>
import Views from './views/'


export default {
    data() {
        return {}
    },
    components: {
        Views
    }
}
</script>
<style lang="scss">
    @import './stylesheets/main.scss';
</style>