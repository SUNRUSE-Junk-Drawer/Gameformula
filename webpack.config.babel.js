import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"
import FaviconsWebpackPlugin from "favicons-webpack-plugin"
import { WebpackBundleSizeAnalyzerPlugin } from "webpack-bundle-size-analyzer"
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/, use: {
          loader: "babel-loader",
          options: {
            presets: ["env"],
            plugins: [["transform-react-jsx", { pragma: "h" }]]
          }
        }
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "head",
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new FaviconsWebpackPlugin({
      logo: "./src/favicon.png",
      prefix: "icons/",
      background: "#000",
      title: "Gameformula",
      icons: {
        coast: true,
        opengraph: true,
        twitter: true,
        yandex: true,
        windows: true
      }
    }),
    new WebpackBundleSizeAnalyzerPlugin(path.resolve(__dirname, "stats.txt"))
  ]
}