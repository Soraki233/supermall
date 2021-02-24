<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div></div>
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
#home {
  padding-top:44px ;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 5;
}
</style>
