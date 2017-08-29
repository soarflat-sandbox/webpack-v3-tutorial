// UglifyJsPluginなどのプラグインを利用するためにwebpackを読み込んでおく必要がある。
const webpack = require('webpack');

// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require('path');

module.exports = {
  // エントリーポイントの設定
  entry: './src/js/app.js',
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: 'bundle.js',
    // 出力先のパス（v2系以降は絶対パスを指定する必要がある）
    path: path.join(__dirname, 'public/js')
  },
  // ローダーの設定
  module: {
    rules: [{
      // ローダーの処理対象ファイル
      test: /\.js$/,
      // ローダーの処理対象から外すディレクトリ
      exclude: /node_modules/,
      // 利用するローダー
      use: [{
        loader: 'babel-loader?presets[]=env'
      }],

      // ↑のローダーを利用する記述は以下のように書いても同じ処理になる
      // use: [{
      //   loader: 'babel-loader',
      //   options: {
      //     presets: ['env']
      //   }
      // }],
    }],
  },
  // プラグインの設定
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery'
    })
  ]
};
