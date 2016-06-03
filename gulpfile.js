'use strict';

var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

gulp.task('test', function () {
    return gulp.src('spec/plugin.spec.js')
        .pipe(jasmine({verbose: true }));
});