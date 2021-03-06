var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/app.js",
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: [],
          plugins: [],
        }
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.css/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.jpg/,
        loader: 'file-loader'
      }
    ]
  },
  output: {
    path: __dirname,
    filename: "app.min.js"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
  ]
};
