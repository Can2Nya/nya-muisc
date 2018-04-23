# nya-muisc

## 技术栈
- react
- webpack
- PWA（可能）

## 布局及动效
- antd-design ui组件
- ant motion

# 从0配置webpack
参考资料：
- [1](https://github.com/varHarrie/varharrie.github.io/issues/14) 
- [react文档中关于webpack配置](https://doc.react-china.org/docs/optimizing-performance.html#webpack)
- [webpack中文文档](https://doc.webpack-china.org)
#### .babelrc
根据提示将babel-preset-es2015升级为[babel-preset-env](http://babeljs.io/env)【然而咱还不知道preset是什么orz】
#### 生产配置与调试配置
使用[webpack-merge](https://doc.webpack-china.org/guides/production/)生成生产环境配置和调试环境配置
输出时使用hash参与文件命名，避免浏览器缓存

生产环境使用以下plugin：
- html-webpack-plugin
- uglifyjs-webpack-plugin
