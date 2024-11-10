// index.js
// Entry point for the application. This file sets up RequireJS and imports main modules.

// RequireJS configuration
require.config({
    baseUrl: "./view", // Define the base directory for module lookups
    paths: {
        // Define paths for dependencies or custom modules
        app: "../app.js", // Maps 'app' to the app.js file in the view directory
        //utils: "./utils" // Maps 'utils' to the utils.js file (if you have utility functions)
    }
});

// Main application initialization
require(["app"], function (app) {
    // The 'app' module is now loaded and can be used
    app.initialize();
});
