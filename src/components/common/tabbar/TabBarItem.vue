<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="isActive"><slot name="item-icon-active"></slot></div>
      <div v-else><slot name="item-icon-deactive"></slot></div>
      <div :style="activeStyle"><slot name="item-text" ></slot></div>
    </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: {
      type: String
    },
    activeColor: {
      type: String,
      default: 'green'
    }
  },
  data () {
    return {
    }
  },
  computed: {
    isActive () {
      // 如果用户点击的路径与当前活跃的路径相等
      if (this.path === this.$route.path) {
        return true
      } else {
        return false
      }
    },
    activeStyle () {
      if (this.isActive) {
        return { color: this.activeColor }
      } else {
        return {}
      }
    }
  },
  methods: {
    itemClick () {
      this.$router.push(this.path)
    }
  }
}
</script>

<style>
  .tab-bar-item{
    /* 把每一个tab-bar-item平均分，每个item占一份空间 */
    flex: 1;
    text-align: center;
    /* 几乎所有的tab-bar的高度都是49px */
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
  }
</style>
