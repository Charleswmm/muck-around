const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/app.js',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
    new HtmlWebpackPlugin({                             // Plugin that takes the source HTML and moves it to public but also adds <link> css and <script> JS tags
      filename: '../index.html',
      title: 'Discord - copy',
      template: 'src/index.html',
      favicon: 'src/assets/disc.ico',
    }),
    new CopyPlugin([
      { from: 'src/assets/*.png', to: 'assets/', flatten: true, },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,                                        // css loader for picking up the source style sheets and outputting and single style sheet at dist
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.svg/,                                          // grabs the svgs (that are less than 4kb) from assets and embeds them into the output style.css
        exclude: /fonts/,
        use: {
          loader: 'svg-url-loader',
          options: {
            limit: 4000,
          },
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: '[name].js',
  }
};