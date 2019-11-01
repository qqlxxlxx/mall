<template>
  <swiper v-if="topImg.length > 0" class="swiper" :autoPlay='false'>
    <slide v-for="(item,index) in topImg" :key="index" class="slide">
      <img :src="item" alt="">
    </slide>
  </swiper>
</template>

<script>
  import {
    Swiper,
    Slide
  } from 'vue-swiper-component';

  export default {
    name: 'DetailSwiper',
    props: {
      topImg: {
        type: Array,
        default () {
          return []
        }
      }
    },
    components: {
        Swiper,
        Slide
    },
    methods: {

    }
  }
</script>

<style scoped>
  .swiper{
    height: 350px;
  }
  img {
    width: 100%;
    vertical-align: middle;
  }
  .wh_indicator{
    color: #1296DB;
  }
</style>
