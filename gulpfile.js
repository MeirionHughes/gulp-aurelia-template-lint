'use strict';

var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

var linter = require('./index');

gulp.task('test', function () {
    return gulp.src('spec/plugin.spec.js')
        .pipe(jasmine({verbose: true }));
});

gulp.task('test-example', function () {
    return gulp.src('example.html')
       .pipe(linter());
});