import { IConfig } from 'umi-types'

// ref: https://umijs.org/config/
const config: IConfig = {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: {
        immer: true
      },
      dynamicImport: { webpackChunkName: true },
      title: 'BLOG-AMS',
      dll: true,
      locale: {
        enable: true,
        default: 'en-US'
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//
        ]
      }
    }]
  ],
  proxy: {
    '/api': {
      'target': 'http://localhost:3000/api',
      'changeOrigin': true,
      'pathRewrite': { '^/api': '' }
    }
  }
}

export default config
