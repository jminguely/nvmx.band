var path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {

    entry: ['./src/index.html', './src/assets/main.js', './src/assets/main.scss'],
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'main.js',
    },
    module: {
    rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].css',
              }
            },
            {
              loader: 'extract-loader'
            },
            {
              loader: 'css-loader?-url'
            },
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        },
        {
          test: /\.html?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
              }
            },
          ],
        }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 9000,
  },
  plugins: [
    new FileManagerPlugin({
      events: {
        onEnd: [
          {
            copy: [
              {
                source: path.join(__dirname, 'src/assets/img'),
                destination: path.join(__dirname, 'public/img'),
              }, {
                source: path.join(__dirname, 'src/assets/favicon'),
                destination: path.join(__dirname, 'public/favicon'),
              }
            ],
          },
        ],
      }
    }),
  ]
}
