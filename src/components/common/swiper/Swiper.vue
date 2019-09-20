<template>
  <swiper v-if="banner.length > 0">
    <slide v-for="(item,index) in banner" :key="index">
      <img :src="item.img" alt="">
    </slide>
  </swiper>
</template>

<script>
  import {
    Swiper,
    Slide
  } from 'vue-swiper-component';

  export default {
    name: 'Swipers',
    props: {
      banner: {
        type: Array,
        default () {
          return []
        }
      }
    },
    components: {
        Swiper,
        Slide
    }
  }
</script>

<style scoped>
  img {
    width: 100%;
    vertical-align: middle;
  }
</style>
