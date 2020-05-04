const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/app.js',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/style.css',                             //'assets/style-[chunkhash:10].css'  Replace with this to get hashed.css. The hash relates to the css chunk of content
    }),
    new HtmlWebpackPlugin({                             // This plugin takes the template and outputs a new HTML file at the public folder. it also adds <link> css and <script> JS tags
      filename: 'index.html',
      template: 'src/template.html',
      favicon: 'src/img/disc.ico',
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,                                        // css loader for picking up the source style sheets and outputting and single style sheet at public
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.svg/,                                          // grabs the svgs (that are less than 8kb) from img and embeds them into the output style.css
        exclude: /fonts/,
        use: {
          loader: 'svg-url-loader',
          options: {
            limit: 8000,
          },
        },
      },
      {
        test: /\.html$/,                                 // html-loader imports every loadable attributes (for example - <img src="image.png">) so then the below file-loader
        use: ['html-loader'],                            // can move the file and change the 'src' in the output HTML file
      },
      {
        test: /\.(png|jpe?g|gif|woff|ttf)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets'
          }
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',                               // '[name]-[contentHash:10].js'  Replace with this to get a hashed.js file. The hash is related to the content
  }
};