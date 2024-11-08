module.exports = function(grunt) {
    // Initialize Grunt configuration
    grunt.initConfig({
        // TypeScript task configuration
        ts: {
            default: {
                // Specify source files: include all .ts files, but exclude those in node_modules
                src: ["**/*.ts", "!node_modules/**/*.ts"]
            }
        }
    });

    // Load the grunt-ts plugin, which enables the TypeScript compilation task
    grunt.loadNpmTasks("grunt-ts");

    // Register the default task to run the TypeScript task when `grunt` is executed
    grunt.registerTask("default", ["ts"]);
};
