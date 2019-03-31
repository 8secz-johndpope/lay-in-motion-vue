<template lang="pug">
  #app    
    router-view
</template>

<script>
import view from './view/index.vue'


export default {
    name: 'app',
    data () {
      return {

      }
    },
    components: {
        view
    }
}
</script>

<style lang="scss">
@import './stylesheets/main.scss';
</style>