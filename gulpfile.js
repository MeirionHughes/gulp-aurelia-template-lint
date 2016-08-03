'use strict';

var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var linter = require('./index');
var Config = require('aurelia-template-lint').Config;

var config = new Config();

config.useRuleAureliaBindingAccess = true;
config.reflectionOpts.sourceFileGlob = "example/**/*.ts";

gulp.task('test', function () {
    return gulp.src('spec/plugin.spec.js')
        .pipe(jasmine({verbose: true }));
});

gulp.task('test-example', function () {
    return gulp.src('example/foo.html')
       .pipe(linter(config));
});