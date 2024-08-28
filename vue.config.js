const { defineConfig } = require('@vue/cli-service')
const path = require('node:path')
console.log('defineConfig=====',)
module.exports = {
  publicPath: process.env.BASE_URL,
 // 是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: true,
  chainWebpack: config => {
    config.module.rule('less').oneOf('vue').use('style-resource')
      .loader('style-resources-loader')
      .options({
        patterns: [
          path.resolve(__dirname, './src/assets/styles/custom.less'),
        ],
      })
    // config.resolve.alias.set('@', resolve('src/custom/utils/bus.js'))
  },
  // css: {
  //       loaderOptions: {
  //         sass: {
  //       // 这里的选项会传递给 sass-loader
  //       // 这是为了全局引入sass
  //       data: `@import "~@/assets/styles/custom2.sass";`
  //         },
  //       scss: {
  //       // 这里的选项会传递给 sass-loader
  //       // 这是为了全局引入sass
  //       data: `@import "~@/assets/styles/custom2.sass";`
  //     },
  //       }
  //   }

  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve('src'),
        '@img': path.resolve('src/assets/images'),
      }
    }
  }
}
