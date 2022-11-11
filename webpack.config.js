const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // mode: "development",
  entry: "./src/main.js",
  // watch: true,
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    assetModuleFilename: "./assets/[name][ext]"
  },
  stats: {
    errorDetails: true

  },
  devServer: {
    port: 8089,
    compress: false,
    static: {
      // eslint-disable-next-line no-undef
      directory: path.join(__dirname, "/")
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "P7",
      filename: "index.html",
      // eslint-disable-next-line no-undef
      favicon: path.resolve(__dirname, "./assets/logo.svg"),
      // eslint-disable-next-line no-undef
      template: path.resolve(__dirname, "./index.html")
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', // Creates `style` nodes from JS strings
          'css-loader' // Translates CSS into CommonJS
        ]
      },
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
                plugins: ["autoprefixer"]
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
  },
  devtool: "eval-source-map"
}