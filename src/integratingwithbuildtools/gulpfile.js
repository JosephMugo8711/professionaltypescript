// Import required Gulp modules
var gulp = require("gulp");
var ts = require("gulp-typescript");

// Define the default task for Gulp, which compiles TypeScript files
gulp.task("default", function () {
    // Define the TypeScript source files and create a Gulp stream
    var tsResult = gulp.src("src/*.ts")  // Target all .ts files in the "src" directory
        .pipe(ts({
            noImplicitAny: true,        // Enable strict type checking; prevents variables with an 'any' type
            out: "output.js"            // Specify the output file name for the compiled JavaScript
        }));

    // Pipe the resulting JavaScript to the output directory
    return tsResult.js.pipe(gulp.dest("built/local"));  // Save compiled output to "built/local"
});
