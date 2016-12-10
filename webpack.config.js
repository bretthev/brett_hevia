module.exports = {
  entry: "./index.js",
  output: {
      path: __dirname,
      filename: "bundle.js"
  },
  module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
        {test: /\.css$/, loaders: ['style', 'css']},
        {test: /\.scss$/, loader: "style!css!sass" }
      ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.scss', '.css']
  }
};
