var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var stream = require('webpack-stream');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var ava = require('gulp-ava');

var buildPaths = {
  ALL: ['app/**/*', 'test/**/*'],
  DEST_BUILD: 'public'
};

var webpackConfig = {
  cache: true,
  entry: './app/index.js',
  output: {
    path: path.join(__dirname, '/public'),
    publicPath: '/redux-skeleton/',
    filename: 'bundle.js'
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ],
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
};

gulp.task('test', ['webpack'], function () {
  return gulp.src('test/unit/index.js')
  .pipe(ava())
  .on('error', function (error) {
    console.log('AVA testing error: ', error.toString());
    this.emit('end');
  });
});

gulp.task('webpack', [], function () {
  return gulp.src(buildPaths.ALL)
    .pipe(stream(webpackConfig))
    .pipe(gulp.dest(buildPaths.DEST_BUILD));
});

gulp.task('webpack-dev-server', function () {
  var config = Object.assign({}, webpackConfig);
  new WebpackDevServer(webpack(config), {
    publicPath: '/redux-skeleton',
    contentBase: 'public'
  }).listen(8082, '0.0.0.0', function (err) {
    if (err) {
      throw new gutil.PluginError('webpack-dev-server', err);
    }
    gutil.log('[webpack-dev-server]', 'http://0.0.0.0:8082/redux-skeleton');
  });
});

gulp.task('watch', function () {
  gulp.watch(buildPaths.ALL, ['webpack', 'test']);
});

gulp.task('default', ['webpack-dev-server', 'watch']);
