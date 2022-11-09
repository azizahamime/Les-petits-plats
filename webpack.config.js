const path = require("path");
module.exports = {
  mode : "development",
  entry: "./src/main.js",
  watch: true,
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname,"dist")
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader","css-loader","sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }

}