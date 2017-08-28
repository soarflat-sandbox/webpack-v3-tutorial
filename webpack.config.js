// UglifyJsPluginなどのプラグインを利用するためにwebpackを読み込んでおく必要がある。
// var webpack = require('webpack');

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
  // module: {
  //   loaders: [{
  //     // ローダーの処理対象ファイル
  //     test: /\.js$/,
  //     // ローダーの処理対象から外すディレクトリ
  //     exclude: /node_modules/,
  //     // 利用するローダー
  //     loader: 'babel-loader?presets[]=es2015'
  //   }]
  // },
  // プラグインの設定
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //     // 圧縮に関する設定
  //     compress: {
  //       // 警告を出力するかどうか
  //       warnings: false,
  //     }
  //   }),
  //   new webpack.ProvidePlugin({
  //     $: 'jquery'
  //   })
  // ]
};
