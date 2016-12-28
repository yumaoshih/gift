// require('./bootstrap.css');
// require('./myapp.less');

// webpack.config.js
module.exports = {
  entry: './main.js',
  output: {
  	path: './build', // 儲存圖片與JS檔案的目錄
    publicPath: 'http://mycdn.com/',
    filename: 'bundle.js'       
  },
  module: {
    loaders: [
      { test: /\.coffee$/, loader: 'coffee-loader' },
      { test: /\.js$/, loader: 'jsx-loader?harmony' },
      // loaders 可以像 querystring 一樣接收參數
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, 
      // 使用 ! 來串接 loaders
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} 
      // 當圖片大小小於 8k 時使用 base64 URL, 其餘使用直接連接到圖片的 URL
    ]
  },
  resolve: {
    // 設定後只需要寫 require('file') 而不用寫成 require('file.coffee')
    extensions: ['', '.js', '.json', '.coffee'] 
  }
};

if (__DEV__) {
  console.warn('Extra logging');
}
// ...
if (__PRERELEASE__) {
  showSecretFeature();
}