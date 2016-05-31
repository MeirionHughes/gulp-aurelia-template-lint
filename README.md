# gulp-aurelia-template-lint
![logo](https://d30y9cdsu7xlg0.cloudfront.net/png/30843-200.png)

Wrap of aurelia-template-lint as a simple gulp plugin in order to sanity check html

[![NPM version][npm-image]][npm-url]

## install
```
npm install gulp-aurelia-template-lint
```

## usage

```
var gulp = require('gulp');
var linter = require('gulp-aurelia-template-lint');

gulp.task('lint-template-html', function () {
    return gulp.src('**/*.html')
        .pipe(linter())
        .pipe(gulp.dest('output'));
});
 
```

## custom rules example

you can override the default set of rules by supplying an array of rules.

```
var gulp = require('gulp');
var linter = require('gulp-aurelia-template-lint');

var TemplateRule = require('aurelia-template-lint').TemplateRule;

var rules = [new TemplateRule()];

gulp.task('build-html', function () {
    return gulp.src('**/*.html')
        .pipe(linter(rules))
        .pipe(gulp.dest('output'));
});
```

##Icon

Icon courtesy of [The Noun Project](https://thenounproject.com/)

[npm-url]: https://npmjs.org/package/gulp-aurelia-template-lint
[npm-image]: http://img.shields.io/npm/v/gulp-aurelia-template-lint.svg

