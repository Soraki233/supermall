<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="left">返回</div>
      <div slot="center"> 购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import { getHomeMultidata } from 'network/home'

export default {
  name: 'Home',
  data () {
    return {
      banners: [],
      recommends: []
    }
  },
  components: {
    NavBar
  },
  created () {
    // 获取首页数据
    getHomeMultidata().then(res => {
      // 将首页数据保存
      this.banners = res.data.data.banner.list
      this.recommends = res.data.data.recommend.list
    })
  }
}
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
