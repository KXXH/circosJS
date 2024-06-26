const path = require('path')

module.exports = {
  entry: './src/circos.js',
  devtool: 'source-map', // 添加这一行
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'circos.module.js',
    library: {
      type: 'module'
    },
  },
  experiments: {
    outputModule: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}