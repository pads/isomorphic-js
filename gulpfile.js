'use strict';

var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config');

gulp.task('default', function() {
  return gulp.src('bootstrap.jsx')
             .pipe(webpack(webpackConfig))
             .pipe(gulp.dest('public/javascripts/'));
});