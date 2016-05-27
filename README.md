# gulp-aurelia-template-lint
Wrap of aurelia-template-lint as a simple gulp plugin

## install
```
npm install gulp-aurelia-template-lint
```

## usage

```
var linter = require('gulp-aurelia-template-lint');

gulp.task('lint-template-html', function () {
    return gulp.src('**/*.html')
        .pipe(linter())
        .pipe(gulp.dest('output'));
});
 
```

## custom rules example

you can override the default set of rules by supplying an array of rules. You can also make your own

```
var gulp = require('gulp');
var gutil = require('gulp-util');
var parse5 = require('parse5');
var stream = require('stream');
var linter = require('gulp-aurelia-template-lint');

class AltSelfCloseRule {
    init(parser) {        
        var self = this;
        self.errors = [];
        parser.on('startTag', (name, attrs, selfClosing, location) => {
            if (selfClosing) { 
                let error = "boo self-closer!... [line: " + location.line + "]";
                self.errors.push(error);                
            }
        });
    }
}

gulp.task('build-html', function () {
    return gulp.src('**/*.html')
        .pipe(linter([new AltSelfCloseRule()]))
        .pipe(gulp.dest('output'));
});

```

## non-template work around
currently there is no way to differenciate between template and 
non-template html so for now you can igore your full documents with: 

```
gulp.task('build-html', function () {
    return gulp.src([
        '!index.html',
        '**/*.html'])
        .pipe(linter())
        .pipe(gulp.dest('output'));
}); 
```
