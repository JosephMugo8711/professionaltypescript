module.exports = {
    // The entry point to start building the dependency graph.
    // This is where Webpack will look to begin bundling.
    entry: "<path to entry point>", // For example: './src/helloMessage.tsx'
  
    // The output section defines where Webpack will output the bundled files.
    output: {
      // Specify the filename for the output bundle.
      // This is the file that will be produced after the build.
      filename: "<path to bundle file>", // For example: './dist/bundle.js'
    },
  
    // Enabling source maps is essential for debugging the bundled code in development.
    // This option helps to map the bundled code back to the original source files.
    devtool: "source-map", // Source maps are created to aid in debugging the transpiled code.
  
    resolve: {
      // Here we specify the file extensions Webpack should resolve.
      // This tells Webpack which files it should consider when importing modules.
      extensions: [
        "",            // Default extension is empty (for legacy reasons)
        ".webpack.js", // Add '.webpack.js' as a valid extension
        ".web.js",     // Add '.web.js' for Web-specific modules
        ".ts",         // Add '.ts' for TypeScript files
        ".tsx",        // Add '.tsx' for TypeScript files with JSX
        ".js"          // Add '.js' for JavaScript files
      ]
    },
  
    module: {
      loaders: [
        // This loader is responsible for handling TypeScript files (.ts and .tsx).
        // It uses 'ts-loader' to transpile TypeScript files into JavaScript.
        { 
          test: /\.tsx?$/, // Match files with '.ts' or '.tsx' extensions
          loader: "ts-loader" // Use 'ts-loader' to transpile TypeScript
        }
      ],
      
      preLoaders: [
        // This is a pre-loader for re-processing JavaScript files that are output.
        // It uses 'source-map-loader' to ensure that sourcemaps are re-processed correctly.
        { 
          test: /\.js$/, // Match JavaScript files
          loader: "source-map-loader" // Process and fix sourcemaps for JavaScript
        }
      ]
    },
  
    // Externals allow us to exclude certain dependencies from the bundle,
    // which helps with keeping the bundle size smaller and allows libraries
    // like React to be cached in the browser.
    externals: {
      "react": "React",      // React is expected to be available as a global variable (not bundled).
      "react-dom": "ReactDOM" // ReactDOM is expected to be available as a global variable (not bundled).
    }
  };

  

  // ﬁnally run webpack or webpack -w (for watch mode)
// Note: React and ReactDOM are marked as external