const cssLoader = {
  loader: 'css-loader', // No usar hasheo por modulos cuando usamos semantic-ui
  // options: {
  //   modules: true,
  //   localIdentName: '[path][name]__[local]--[hash:base64:5]',
  //   ignore: '/node_modules/'
  // }
};

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { presets: [    ["env", {
          "targets": { node: "6" }, // specify targets here
        }], 'stage-0', 'react'] },
      },
      {
        test: /\.css$/,
        use: ['style-loader', cssLoader]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ],
  },
};