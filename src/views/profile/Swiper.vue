<template>
  <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback" class="aaa">
    <!-- slides -->
    <swiper-slide class="bbb">I'm Slide 1</swiper-slide>
    <swiper-slide class="bbb">I'm Slide 2</swiper-slide>
    <swiper-slide class="bbb">I'm Slide 3</swiper-slide>
    <swiper-slide class="bbb">I'm Slide 4</swiper-slide>
    <swiper-slide class="bbb">I'm Slide 5</swiper-slide>
    <swiper-slide class="bbb">I'm Slide 6</swiper-slide>
    <swiper-slide class="bbb">I'm Slide 7</swiper-slide>
    <!-- Optional controls -->
    <!-- 如果需要分页器 -->
    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
    <!-- <div class="swiper-button-next" slot="button-next"></div> -->
    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
  </swiper>
</template>

<script>
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'

  export default {
    name: 'Swiper',
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {

      }
    }

  }
</script>

<style scoped>
  .aaa{
    height: 200px;
  }
  .bbb{
    height: 200px;
  }
</style>
