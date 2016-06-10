# gulp-aurelia-template-lint
![logo](https://d30y9cdsu7xlg0.cloudfront.net/png/30843-200.png)

Wrap of [aurelia-template-lint](https://github.com/MeirionHughes/aurelia-template-lint) as a simple gulp plugin in order to sanity check html

[![NPM version][npm-image]][npm-url]
[![NPM downloads][npm-downloads]][npm-url]
[![Travis Status][travis-image]][travis-url]

## Install
```
npm install gulp-aurelia-template-lint
```

## Usage

```
var gulp = require('gulp');
var linter = require('gulp-aurelia-template-lint');
var config = new (require('aurelia-template-lint').Config);

config.obsoleteTags.push('my-old-tag');

gulp.task('default', function () {
    return gulp.src('**/*.html')
        .pipe(linter())
        .pipe(gulp.dest('output'));
});

gulp.task('with-custom-config', function () {
    return gulp.src('**/*.html')
        .pipe(linter(config))
        .pipe(gulp.dest('output'));
});

gulp.task('with-custom-reporter', function () {
    return gulp.src('**/*.html')
        .pipe(linter(config, (error, file)=>{}))
        .pipe(gulp.dest('output'));
});
```

##Icon

Icon courtesy of [The Noun Project](https://thenounproject.com/)

[npm-url]: https://npmjs.org/package/gulp-aurelia-template-lint
[npm-image]: http://img.shields.io/npm/v/gulp-aurelia-template-lint.svg

[npm-url]: https://npmjs.org/package/gulp-aurelia-template-lint
[npm-image]: http://img.shields.io/npm/v/gulp-aurelia-template-lint.svg
[npm-downloads]: http://img.shields.io/npm/dm/gulp-aurelia-template-lint.svg
[travis-url]: https://travis-ci.org/MeirionHughes/gulp-aurelia-template-lint
[travis-image]: https://img.shields.io/travis/MeirionHughes/gulp-aurelia-template-lint/master.svg
