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
      use: [{
        // 利用するローダー
        loader: 'babel-loader',
        // ローダーのオプション
        options: {
          presets: ['env']
        }
      }],
    }, {
      // enforce: 'pre'を指定することによって
      // enforce: 'pre'がついていないローダーより早く処理が実行される
      // 今回はbabel-loaderで変換する前にコードをチェックしたいため、指定が必要
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
    }],
  },
  // プラグインの設定
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        // console.log（）などのconsole.*系の記述を取り除いて出力する
        drop_console: true
      },
    }),
    new webpack.ProvidePlugin({
      $: 'jquery'
    }),
  ],
};
