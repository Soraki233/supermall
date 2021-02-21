<template>
  <div id="app">
    <router-view></router-view>
    <tab-barall></tab-barall>
  </div>
</template>

<script>
import TabBarall from 'components/common/tabbar/TabBarall'
export default {
  name: 'app',
  components: {
    TabBarall
  },
  methods: {
  }
}
</script>

<style>
@import 'assets/css/base.css';
</style>
