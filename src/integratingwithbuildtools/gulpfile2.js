// Import required modules
var gulp = require("gulp");
var ts = require("gulp-typescript");

// Create a TypeScript project using settings from `tsconfig.json`
// Additional options, such as `noImplicitAny`, can be specified here to override tsconfig.json
var tsProject = ts.createProject('tsconfig.json', {
    noImplicitAny: true  // Enforce stricter typing by disallowing implicit `any` types
});

// Define the default Gulp task to compile TypeScript files
gulp.task("default", function () {
    // Use the TypeScript project to get the source files based on tsconfig.json
    var tsResult = tsProject.src()
        .pipe(tsProject());  // Run the TypeScript compiler with the specified project settings

    // Output the compiled JavaScript files to the 'release' directory
    return tsResult.js.pipe(gulp.dest('release'));
});
