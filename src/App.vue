<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tabbar/>
  </div>
</template>

<script>
  import MainTabbar from 'components/content/mainTabbar/MainTabbar.vue'

  export default {
    name: 'app',
    components: {
      MainTabbar
    }
  }
</script>

<style scoped>
  @import "assets/css/normalize.css";
</style>
