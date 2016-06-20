var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var stream = require('webpack-stream');
var ava = require('gulp-ava');
var webpackConfig = require('./webpack.config');

var buildPaths = {
  ALL: ['app/**/*', 'test/**/*'],
  DEST_BUILD: 'public'
};

gulp.task('copy', function () {
  gulp.src(['app/assets/**/*'])
  .pipe(gulp.dest('public'));
});

gulp.task('test', ['webpack'], function () {
  return gulp.src('test/unit/index.js')
  .pipe(ava())
  .on('error', function (error) {
    console.log('AVA testing error: ', error.toString());
    this.emit('end');
  });
});

gulp.task('webpack', ['copy'], function (callback) {
  return gulp.src(buildPaths.ALL)
    .pipe(stream(webpackConfig))
    .pipe(gulp.dest(buildPaths.DEST_BUILD));
});

gulp.task('webpack-dev-server', function () {
  var config = Object.assign({}, webpackConfig);
  new WebpackDevServer(webpack(config), {
    contentBase: 'public/',
    stats: {
      colors: true
    },
    publicPath: '/',
  }).listen(8082, '0.0.0.0', function (err) {
    if (err) {
      throw new gutil.PluginError('webpack-dev-server', err);
    }
    gutil.log('[webpack-dev-server]', 'http://0.0.0.0:8082/');
  });
});

gulp.task('watch', function () {
  gulp.watch(buildPaths.ALL, ['webpack', 'test']);
});

gulp.task('default', ['webpack', 'webpack-dev-server', 'watch']);
