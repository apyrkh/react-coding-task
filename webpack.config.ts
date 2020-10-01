import * as express from 'express'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import path from 'path'
import TerserPlugin from 'terser-webpack-plugin'
import webpack from 'webpack'

const NODE_ENV = process.env.NODE_ENV || 'development'
const isProduction = NODE_ENV === 'production'

const entryPath = path.join(__dirname, 'src')
const outputPath = path.join(__dirname, 'build')

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
  }),
  new MiniCssExtractPlugin({
    filename: 'css/[name].css',
    chunkFilename: 'css/[name].css'
  })
]

const webpackConfig: webpack.Configuration = {
  devtool: isProduction ? false : 'cheap-source-map',

  entry: {
    app: `${entryPath}/App.tsx`
  },

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },

  mode: isProduction ? 'production' : 'development',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: entryPath,
        loader: 'babel-loader'
      },
      {
        sideEffects: true,
        test: /\.(css|less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }]
      },
      {
        test: /\.ico$/,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'fonts/'
        }
      }
    ]
  },

  optimization: {
    concatenateModules: isProduction,
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
      new TerserPlugin({
        terserOptions: {
          output: {
            beautify: false,
            comments: false
          }
        },
        extractComments: false,
        sourceMap: false
      })
    ],
    noEmitOnErrors: true
  },

  output: {
    path: outputPath,
    filename: 'js/[name].js',
    publicPath: '/',
    library: '[name]',
    libraryTarget: 'var'
  },

  plugins: plugins,

  resolve: {
    alias: {
      '@app': path.join(__dirname, 'src')
    },
    modules: ['node_modules'],
    extensions: ['.js', '.ts', '.tsx']
  },

  resolveLoader: {
    modules: ['node_modules'],
    moduleExtensions: ['*-loader', '*'],
    extensions: ['.js']
  },

  devServer: {
    disableHostCheck: true,
    before (app: express.Application) {
      app.use('/js/react.js', express.static(require.resolve('react/umd/react.development')))
      app.use('/js/react-dom.js', express.static(require.resolve('react-dom/umd/react-dom.development')))
    },

    host: '0.0.0.0',
    port: 8000,
    historyApiFallback: true,
    liveReload: true,

    stats: {
      colors: true,
      errors: true,
      reasons: false,
      warnings: true,

      assets: false,
      chunks: false,
      children: false,
      entrypoints: true,
      hash: false,
      modules: false,
      timings: false,
      version: false
    }
  }
}

export default webpackConfig
