//  postcss 配置
module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ['Android >= 4.0', 'ios >= 7']
    },
    'postcss-pxtorem': {
      // 根节点的 fontSize 值
      rootValue: 16,
      // 全部 css 属性
      propList: ['*'],
      //  忽略 :root 定义的值
      selectorBlackList: [':root']
    }
  }
}
