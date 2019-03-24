const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader");

module.exports = function (entry, defines) {
  return {
    entry:   ["@babel/polyfill",
              entry],
    output:  {
      path:     "/",
      filename: "bundle.js",
    },
    target:  "web",
    mode:    "development",
    plugins: [
      new VueLoaderPlugin.VueLoaderPlugin(),
      new webpack.DefinePlugin(defines),
    ],
    devtool: "eval",
    module:  {
      rules: [
        {
          test:   /\.vue$/,
          loader: "vue-loader",
        },
        {
          test: /\.js$/,
          use:  {
            loader:  "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
        {
          test: /\.css$/,
          use:  [
            "vue-style-loader",
            "css-loader",
          ],
        },
        {
          test: /\.scss$/,
          use:  [
            "vue-style-loader",
            "css-loader",
            "sass-loader"
          ]
        },
        {
          test:    /\.(png|jpg|gif|svg|ttf|woff|woff2|eot)$/,
          loader:  "file-loader",
          options: {
            name: "[name].[ext]?[hash]",
          },
        },
      ],
    },
    resolve: {
      alias: {
        vue$: "vue/dist/vue.common.js",
      }
    }
  };
};
