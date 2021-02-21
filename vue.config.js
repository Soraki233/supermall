module.exports = {
  configureWebpack: {
    // 配置路径别名
    resolve: {
      // 具体的映射表
      alias: {
        // 别名对应项目路径，@代表src
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}