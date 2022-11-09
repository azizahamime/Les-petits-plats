const path = require("path");
module.exports = {
  mode : "development",
  entry: "./src/main.js",
  watch: true,
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname,"dist")
  },
  stats: {
    errorDetails: true

  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { importLoaders: 1 }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [ "autoprefixer"]
              }
            }
          },
          "sass-loader"
        ]
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