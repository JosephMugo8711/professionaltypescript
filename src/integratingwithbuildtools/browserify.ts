var browserify = require('browserify');
var tsify = require('tsify');



// Create a new Browserify instance
browserify()
    .add("main.ts")
    .plugin("tsify", {noImplicitAny: true})
    .bundle()
    .pipe(process.stdout)
