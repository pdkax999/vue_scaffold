const  path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')

const  VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry:{

  app:path.resolve(__dirname,'src/index.js')

  },
  output:{
  filename: 'static/js/[name].bundle.js',
  path: path.resolve(__dirname,'dis'),
  publicPath: '/'
  
  },
  module:{
  rules:[
  {
    test:/\.js$/,
    exclude:/node_modules/,
    use:{
      loader: 'babel-loader',
      options:{ 
        presets: [
          ['@babel/preset-env', {
            useBuiltIns: 'usage',
            'corejs': 2 // 处理一些新语法的实现
          }]
        ], 
      }
    }
  },
  {
    test:/\.vue$/,
    include: path.resolve(__dirname, 'src'),
    loader: 'vue-loader'
  },
  {
    test:/\.css$/,
    use: ['vue-style-loader','css-loader'],
  },
  {
    test: /\.less$/,
    use: [
      'style-loader',
      'css-loader',
      // 将less文件编译成css文件
      // 需要下载 less-loader和less
      'less-loader'
    ]
  },
  {
    test: /\.(png|jpg|gif)$/i,
    use:[
     {
      loader: 'url-loader',
      options:{
        limit:8192,
        name: 'static/img/[name].[hash:7].[ext]'
      }
     }
    ]

  }

  ]
  },
  plugins:[
  new HtmlWebpackPlugin({
   template: 'index.html',
   filename: 'index.html'
  }),
  new VueLoaderPlugin()
  ],
  resolve:{
  extensions: ['.js', '.vue', '.json'], // 可以省略的后缀名
  alias: { // 路径别名(简写方式)
    'vue$': 'vue/dist/vue.esm.js',  // 表示精准匹配
    '@': path.resolve(__dirname,'src'),
    '@/components': path.resolve(__dirname,'src/components')
  }

  },
  devServer: {
    open: true, // 自动打开浏览器
    quiet: true, // 不做太多日志输出 
    proxy:{

      '/api':{
        target:'http://localhost:4000',
        pathRewrite:{
          '^/api' : '' 
        }
      },
    


    },
    historyApiFallback: true,

  },
 
  devtool: 'cheap-module-eval-source-map'
}