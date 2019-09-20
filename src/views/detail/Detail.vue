<template>
  <div id="detail">
    <detail-nav-bar />
    <detail-swiper :topImg="topImg" />
    <detail-base-info :baseInfo="baseInfo" />
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'

  import {getDetail} from 'network/detail.js'

  export default {
    name: 'Detail',
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo
    },
    data() {
      return {
        iid: null,
        topImg: [],
        baseInfo: {}
      }
    },
    created() {
      this.iid = this.$route.params.iid;
      getDetail(this.iid)
        .then(res => {
          console.log(res[0]);
          this.topImg = res[0].itemInfo.topImg
          this.baseInfo = res[0].baseInfo
        })
    }
  }
</script>

<style>
</style>
