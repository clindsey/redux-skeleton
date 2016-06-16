var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var path = require('path');
var ava = require('gulp-ava');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

/*
const productionPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({output: {comments: false}})
];
*/

gulp.task('default', ['build-dev']);

gulp.task('build-dev', ['copy', 'webpack', 'test'], function () {
  gulp.watch(['app/**/*', 'test/**/*'], ['test']);
});

gulp.task('copy', function () {
  gulp.src(['app/assets/**/*'])
  .pipe(gulp.dest('public'));
});

gulp.task('test', ['webpack'], function () {
  gulp.src('test/unit/index.js')
  .pipe(ava())
  .on('error', function (error) {
    console.log('AVA testing error: ', error.toString());
    this.emit('end');
  });
});

gulp.task('webpack', ['copy'], function (callback) {
  webpack({
    entry: './app/index.js',
    output: {
      path: path.join(__dirname, '/public'),
      publicPath: '/redux-skeleton/',
      filename: 'bundle.js'
    },
    plugins: [
      new ExtractTextPlugin('bundle.css')
    ], // .concat(productionPlugins),
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: 'style!css'
        }, {
          test: /\.less$/,
          loader: 'style!css!less'
        }, {
          test: /\.jsx?$/,
          exclude: /(node_modules|jam|bootstrap)/,
          loader: 'babel'
        }, {
          test: /bootstrap\/js\//,
          loader: 'imports?jQuery=jquery'
        }, {
          test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=10000&mimetype=application/font-woff'
        }, {
          test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=10000&mimetype=application/font-woff'
        }, {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=10000&mimetype=application/octet-stream'
        }, {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file'
        }, {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=10000&mimetype=image/svg+xml'
        }
      ]
    }
  }, function (err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }
    gutil.log('[webpack]', stats.toString({}));
    callback();
  });
});