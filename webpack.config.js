const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    publicPath: '/',
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            configFile: path.resolve(__dirname, 'tsconfig.json'),
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('tailwindcss'),
                  require('autoprefixer'),
                ],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      title: "Art History Timeline",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
    setupMiddlewares: (middlewares, devServer) => {
      const spaFallback = (req, res, next) => {
        if ((req.method !== 'GET' && req.method !== 'HEAD') || !req.url) return next();
        const pathname = req.url.split('?')[0];
        if (!/^\/(fr|ru)(\/|$)/.test(pathname)) return next();

        const compiler = devServer.compiler;
        const outputPath = compiler.options.output.path;
        const fs = compiler.outputFileSystem;
        if (!fs || !fs.readFile) return next();
        const indexPath = path.join(outputPath, 'index.html');
        fs.readFile(indexPath, (err, data) => {
          if (err) return next();
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.end(data);
        });
      };
      middlewares.unshift({ name: 'spa-fallback', middleware: spaFallback });
      return middlewares;
    },
  },
  devtool: 'source-map',
};
