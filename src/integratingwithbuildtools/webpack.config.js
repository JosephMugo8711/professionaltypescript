
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


module.exports = {
    // 'entry' defines the entry point for the application. The first file to be executed when the bundle is created.
    // Here, we specify an array of files (for example, an app entry point).
    entry: {
      app: ['./src/'], // Entry point of our application, the bundling will start from './src/' directory.
    },
  
    // 'output' specifies where and how the bundled files should be output.
    output: {
      // '__dirname' is a Node.js global variable that refers to the directory name of the current module.
      // This ensures that the output path is relative to the current project directory.
      path: __dirname,  // Path where the bundled files will be output.
      
      // 'filename' specifies the name of the output file.
      // We use '[name]' as a placeholder for the entry point name (in this case, 'app').
      // This allows for dynamic file names based on entry points.
      filename: './dist/[name].js',  // The output file will be saved in the './dist/' directory with the entry point name.
    },
  
    // 'resolve' helps Webpack understand how to resolve files. 
    // It's useful when dealing with non-default file extensions.
    resolve: {
      // 'extensions' array defines which file extensions Webpack will look for when resolving modules.
      // Here, we are allowing '.js' and '.ts' (with or without the 'x' for TypeScript JSX support).
      extensions: ['', '.js', '.ts'], // File extensions to be used during module resolution.
    },
  
    // 'module' defines how different types of modules (files) should be processed.
    // This is where we specify rules for loading and transforming files before they are bundled.
    module: {
      loaders: [{
        // 'test' is a regular expression that matches the files we want to process.
        // Here, we are matching '.ts' and '.tsx' files (TypeScript with JSX support).
        test: /\.ts(x)?$/, // Match all TypeScript (.ts or .tsx) files.
  
        // 'loaders' specifies which loaders should be used to transform the files.
        // 'ts-loader' is used to compile TypeScript files.
        loaders: ['ts-loader'], // Use ts-loader to transpile TypeScript files into JavaScript.
  
        // 'exclude' tells Webpack to ignore files in the node_modules directory. 
        // These files are typically already precompiled and don't need processing.
        exclude: /node_modules/ // Do not process files in the 'node_modules' directory.
      }],
    },
  
    // 'devtool' configuration enables source maps for better debugging in the browser.
    // We can use 'eval-source-map' for development builds for faster rebuild times with good debugging information.
    devtool: 'source-map', // Enable source maps for better debugging and error tracking.
  
    // 'mode' specifies the mode in which Webpack should run. 
    // 'development' mode includes debugging support, while 'production' enables optimizations.
    mode: 'development', // Set the mode to 'development' to enable features like source maps and faster builds.
  };
  