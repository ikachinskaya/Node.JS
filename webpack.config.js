/*
entry -точка входа для webpack
output - то, что webpack отдаст
mode: "development" | "production" - режим разработчика | предоставления конечной версии
*/
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    // filename: "output.js",
    filename:
      "[contenthash].js" /* если нужно разбить index.js на несколько частей */,
    path: path.resolve(__dirname, "bundle"),
    clean: true /* для очистки ненужных файлов в bundle */,
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
      template: "./index-template.html",
    }),
  ],
  devServer: {
    static: "./bundle",
    hot: false,
  },
};
