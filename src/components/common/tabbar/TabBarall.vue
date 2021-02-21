<template>
    <div id="TabBarall">
      <tab-bar>
        <tab-bar-item path="/home" activeColor="pink">
          <img src="../../../assets/img/tabbar/index-active.svg" alt="" slot="item-icon-active">
          <img src="../../../assets/img/tabbar/index-deactive.svg" alt="" slot="item-icon-deactive">
          <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/category" activeColor="pink">
          <img src="../../../assets/img/tabbar/index-active.svg" alt="" slot="item-icon-active">
          <img src="../../../assets/img/tabbar/index-deactive.svg" alt="" slot="item-icon-deactive">
          <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cart" activeColor="pink"></tab-bar-item>
          <img src="../../../assets/img/tabbar/index-active.svg" alt="" slot="item-icon-active">
          <img src="../../../assets/img/tabbar/index-deactive.svg" alt="" slot="item-icon-deactive">
          <div slot="item-text">购物车</div>
        <tab-bar-item path="/profile" activeColor="pink">
          <img src="../../../assets/img/tabbar/index-active.svg" alt="" slot="item-icon-active">
          <img src="../../../assets/img/tabbar/index-deactive.svg" alt="" slot="item-icon-deactive">
          <div slot="item-text">我的</div>
        </tab-bar-item>
      </tab-bar>
    </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name: 'TabBarall',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>
