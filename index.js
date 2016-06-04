var Stream = require('stream');
var gutil = require('gulp-util');
var AureliaLinter = require('aurelia-template-lint').AureliaLinter;
var Config = require('aurelia-template-lint').Config;

module.exports = function(config, reporter) {
    if(!config)  
       config = new Config();
  
    if(!reporter)
        reporter = (error, file)=>{
             gutil.log(`WARNING: ${error.message} Ln ${error.line} Col ${error.column}`, file);
        }
          
    var linter = new AureliaLinter(config);

    var stream = new Stream.Transform({objectMode: true});
    stream._transform = function(file, encoding, cb) {
        // When null just pass through
        if (file.isNull()) {
            this.push(file);
            cb();
            return;
        }      
        
        var pathShort = "";
        
        if(file.path && file.cwd)
            pathShort = file.path.substring(file.cwd.length, file.path.Length);
        
        var html = String(file.contents);        
        var self = this;        
        
        linter
            .lint(html)        
            .then((errors) => {          
                errors.forEach((error) => {                    
                    reporter(error, pathShort)});
            })
            .then(() => {
                self.push(file);              
                cb(null, file) });
    };
    return stream;
};