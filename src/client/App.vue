<template lang="pug">
    #app
        router-view
</template>

<script>
import Views from './views/index'


export default {
    data() {
        return {}
    },
    components: {
        'v-views' : Views
    }
}
</script>
<style lang="scss">
    @import '@/../stylesheets/main.scss';
</style>