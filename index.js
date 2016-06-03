var Stream = require('stream');
var gutil = require('gulp-util');
var Linter = require('template-lint').Linter;

var SelfCloseRule = require('template-lint').SelfCloseRule;
var ParserRule = require('template-lint').ParserRule;

var ProjectionRule = require('aurelia-template-lint').ProjectionRule;
var TemplateRule = require('aurelia-template-lint').TemplateRule;
var RequireRule = require('aurelia-template-lint').RequireRule;

module.exports = function(rules, reporter) {
       
    if (!rules)
        rules = [
            new SelfCloseRule(),
            new ParserRule(), 
            new TemplateRule(), 
            new RequireRule()];
            
    if(!reporter)
        reporter = (error, file)=>{
             gutil.log(`WARNING: ${error.message} Ln ${error.line} Col ${error.column}`, file);
        }
          
    var linter = new Linter(rules);
    
    console.log();
   
    var stream = new Stream.Transform({objectMode: true});
    stream._transform = function(file, encoding, cb) {
        // When null just pass through
        if (file.isNull()) {
            this.push(file);
            cb();
            return;
        }             
        
        var pathshort = "file";// file.path: file.path.substring(file.cwd.length, file.path.Length);
        var html = String(file.contents);
        
        var self = this;
        
        linter
            .lint(html)        
            .then((errors) => {           
                errors.forEach((error) => {reporter(error,pathshort)});
            })
            .then(() => {
                self.push(file);              
                cb(null, file) });
    };
    return stream;
};