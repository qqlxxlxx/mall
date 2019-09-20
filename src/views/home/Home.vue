<template>
  <div id="home">
    <navbar class="home-nav">
      <div slot="center">购物街</div>
    </navbar>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <!-- <div><img src="~assets/img/sw.webp" alt=""></div> -->
      <home-swiper :banner="banner"></home-swiper>
      <rcommend-view :recommend="recommend" />
      <feature-view class="feature" />
      <tab-control class="tab-control"
                   :titles="['流行','新款','精选']"
                   @tabClick="tabClick"
                   ref="tabControl" />
      <goods-list :goods="goods[currentType].list"/>
    </scroll>
    <back-top @click.native="topClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
  import Navbar from 'components/common/navbar/Navbar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'

  import HomeSwiper from './childComps/HomeSwiper'
  import RcommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import {
    getHomeMultialdata,
    getHomeGoods
  } from 'network/home.js'

  export default {
    name: 'Home',
    components: {
      Navbar,
      TabControl,
      HomeSwiper,
      RcommendView,
      FeatureView,
      GoodsList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banner: [],
        recommend: [],
        goods: {
          'pop': {
            page: 0,
            list: []
          },
          'new': {
            page: 0,
            list: []
          },
          'sell': {
            page: 0,
            list: []
          },
        },
        currentType: 'pop',
        isShowBackTop: false,
        tabOffsetTop: 0
      }
    },
    created() {
      this.getHomeMultialdata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods: {
      /*
      事件监听相关
      */
      tabClick(index) {
        switch(index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
      topClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      contentScroll(position) {
        // console.log(position);
        this.isShowBackTop = -position.y > 1000
      },
      loadMore() {
        this.getHomeGoods(this.currentType)
      },

      /*
      网络请求相关
      */
      getHomeMultialdata() {
        getHomeMultialdata().then(res => {
          this.banner = res.banner.list;
          this.recommend = res.recommend.list;
        })
      },
      getHomeGoods(url, page) {
        page = this.goods[url].page + 1;
        getHomeGoods(url, page).then(res => {
          // console.log(url, res);
          if(res.length == 0) {
            console.log(url,'没有更多数据');
            // return; //为什么另外两个数据空，剩下一个不加载
          }
          this.goods[url].list.push(...res);
          this.goods[url].page += 1;

          this.$refs.scroll.refresh()
          setTimeout(() => {
            this.$refs.scroll.finishPullUp();
          }, 1000)
        })
      }
    }
  }
</script>

<style scoped>
  #home {
    height: 100vh;
    padding-top: 44px;
  }
  .home-nav {
    width: 100%;
    background: #1296db;
    color: #fff;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
  }
  img {
    width: 100%;
    vertical-align: middle;
  }
  .tab-control {
    /* position: sticky;
    top: 45px; */
  }
  .content{
    height: calc(100% - 93px);
    overflow: hidden;
    /* position: absolute;
    top: 44px;
    bottom: 60px;
    left: 0;
    right: 0; */
  }
</style>
