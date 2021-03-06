module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: "./bundle.js"
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015","stage-1","react"]
        }
      }
    ]
  }
}