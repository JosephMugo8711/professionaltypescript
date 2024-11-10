// Import the SystemJS Builder module
var Builder = require('systemjs-builder');

// Create a new instance of the Builder
var builder = new Builder();

// Load the SystemJS configuration from the specified config file
builder.loadConfig('./config.js').then(function() {
    // Bundle the TypeScript file 'hello.ts' into a single JavaScript file 'hello.js'
    // The 'minify' option is set to true to reduce file size
    builder.bundle('./hello.ts', './hello.js', { minify: true })
        .then(function() {
            console.log('Build complete and minified!');
        })
        .catch(function(error) {
            console.error('Build failed:', error);
        });
});

// build hello.js from hello.ts
// node build.js