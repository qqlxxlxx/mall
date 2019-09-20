<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <li>我是1个li <button @click="fn">按钮</button></li>
      <li>我是2个li</li>
      <li>我是3个li</li>
      <li>我是4个li</li>
      <li>我是5个li</li>
      <li>我是6个li</li>
      <li>我是7个li</li>
      <li>我是8个li</li>
      <li>我是9个li</li>
      <li>我是10个li</li>
      <li>我是11个li</li>
      <li>我是12个li</li>
      <li>我是13个li</li>
      <li>我是14个li</li>
      <li>我是15个li</li>
      <li>我是16个li</li>
      <li>我是17个li</li>
      <li>我是18个li</li>
      <li>我是19个li</li>
      <li>我是20个li</li>
      <li>我是21个li</li>
      <li>我是22个li</li>
      <li>我是23个li</li>
      <li>我是24个li</li>
      <li>我是25个li</li>
      <li>我是26个li</li>
      <li>我是27个li</li>
      <li>我是28个li</li>
      <li>我是29个li</li>
      <li>我是30个li</li>
      <li>我是31个li</li>
      <li>我是32个li</li>
      <li>我是33个li</li>
      <li>我是34个li</li>
      <li>我是35个li</li>
      <li>我是36个li</li>
      <li>我是37个li</li>
      <li>我是38个li</li>
      <li>我是39个li</li>
      <li>我是40个li</li>
      <li>我是41个li</li>
      <li>我是42个li</li>
      <li>我是43个li</li>
      <li>我是44个li</li>
      <li>我是45个li</li>
      <li>我是46个li</li>
      <li>我是47个li</li>
      <li>我是48个li</li>
      <li>我是49个li</li>
      <li>我是50个li</li>
      <li>我是51个li</li>
      <li>我是52个li</li>
      <li>我是53个li</li>
      <li>我是54个li</li>
      <li>我是55个li</li>
      <li>我是56个li</li>
      <li>我是57个li</li>
      <li>我是58个li</li>
      <li>我是59个li</li>
      <li>我是60个li</li>
      <li>我是61个li</li>
      <li>我是62个li</li>
      <li>我是63个li</li>
      <li>我是64个li</li>
      <li>我是65个li</li>
      <li>我是66个li</li>
      <li>我是67个li</li>
      <li>我是68个li</li>
      <li>我是69个li</li>
      <li>我是70个li</li>
      <li>我是71个li</li>
      <li>我是72个li</li>
      <li>我是73个li</li>
      <li>我是74个li</li>
      <li>我是75个li</li>
      <li>我是76个li</li>
      <li>我是77个li</li>
      <li>我是78个li</li>
      <li>我是79个li</li>
      <li>我是80个li</li>
      <li>我是81个li</li>
      <li>我是82个li</li>
      <li>我是83个li</li>
      <li>我是84个li</li>
      <li>我是85个li</li>
      <li>我是86个li</li>
      <li>我是87个li</li>
      <li>我是88个li</li>
      <li>我是89个li</li>
      <li>我是90个li</li>
      <li>我是91个li</li>
      <li>我是92个li</li>
      <li>我是93个li</li>
      <li>我是94个li</li>
      <li>我是95个li</li>
      <li>我是96个li</li>
      <li>我是97个li</li>
      <li>我是98个li</li>
      <li>我是99个li</li>
      <li>我是100个li</li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: 'Category',
    data() {
      return {
        bscroll: null
      }
    },
    mounted() {
      const bscroll = new BScroll(this.$refs.wrapper, {
        probeType: 3,
        pullUpLoad: true
      })
      bscroll.on('scroll', position => {
        // console.log(position);
      })
      bscroll.on('pullingUp', () => {
        console.log('上拉加载更多');
      })
    },
    methods: {
      fn() {
        console.log('aaa');
      }
    }
  }
</script>

<style scoped>
  .wrapper{
    width: 100%;
    height: 200px;
    background: pink;
    overflow: hidden;
  }
  .content{

  }
</style>
