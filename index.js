var gulp = require('gulp');
var gutil = require('gulp-util');
var Linter = require('aurelia-template-lint').Linter;

module.exports = function (rules) {
    
    var linter = new Linter(rules);
    
    function sanitize(file, cb) {

        var html = String(file.contents);

        linter
            .lint(html)
            .then((errors) => {
                errors.forEach((error) => {
                    gutil.log('WARNING', error, 
                    file.path.substring(file.cwd.length, file.path.Length));
                });
            })
            .then(() => { cb(null, file) });
    }
    return require('event-stream').map(sanitize);
}