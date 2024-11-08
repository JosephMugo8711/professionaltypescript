
// webpack 2.x, 3.x
module.exports = {
    // Resolve extensions to allow importing these file types without specifying their extensions.
    resolve: {
       //.ts: Recognizes TypeScript files.
       //.tsx: Recognizes TypeScript files that include JSX (typically used in React).
       //.js: Allows importing JavaScript files.
       //.json: Useful if you’re importing JSON configuration files directly.
        extensions: ['.ts', '.tsx', '.js'],  // Recognize TypeScript and JavaScript files
    },

    // Define module rules for handling different file types.
    module: {
        rules: [
            {
                // Apply ts-loader to .ts and .tsx files for TypeScript compilation.
                test: /\.tsx?$/,  // Matches .ts or .tsx file extensions
                loaders: ['ts-loader'],  // Use ts-loader to compile TypeScript files
                exclude: /node_modules/,  // Exclude files in node_modules to optimize build performance
            },
        ],
    },

    // Entry point for the application, specifying the starting file.
    entry: [
        './index.tsx',  // Main application file to be bundled
    ],

    // Output configuration for the bundled file.
    output: {
        filename: 'bundle.js',  // Name of the output file after bundling
    },
};


module.exports = {
    // Entry point for the application, specifying the starting file.
    entry: "./src/index.tsx",

    // Output configuration for the bundled file.
    output: {
        filename: "bundle.js",  // Name of the output file after bundling
    },

    // Resolve configuration to specify which file extensions Webpack should process.
    resolve: {
        // Add supported extensions for module resolution
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    },

    // Module rules for handling specific file types.
    module: {
        loaders: [
            {
                // Process all .ts and .tsx files with ts-loader to handle TypeScript files.
                test: /\.tsx?$/,        // Regex to match .ts and .tsx file extensions
                loader: "ts-loader",    // Use ts-loader to compile TypeScript files
                exclude: /node_modules/ // Exclude node_modules for faster build times
            }
        ]
    }
};
