const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  entry: {
    "vue-props-editor": "./src/index.js"
  },
  mode: "development",
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new BundleAnalyzerPlugin()
  ],
  output: {
    filename: "[name].common.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".js"],
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // 将 JS 字符串生成为 style 节点
          },
          {
            loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
          },
          {
            loader: "sass-loader" // 将 Sass 编译成 CSS
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  }
};
