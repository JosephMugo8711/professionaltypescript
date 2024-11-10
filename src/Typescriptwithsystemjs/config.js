// SystemJS conﬁguration ﬁle
// NOTE: if you don't want type checking, remove loader: "plugin-typescript" and typescriptOptions from
// config.js. Also note that it will never check javascript code, in particular code in the <script> tag in html example
// Test it
// npm install live-server ./node_modules/.bin/live-server --open=hello.html
System.config({
    // Configuration for packages used by SystemJS
    packages: {
        // Plugin for loading TypeScript files
        "plugin-typescript": {
            "main": "plugin.js"  // Main entry point for the plugin
        },
        // TypeScript library configuration
        "typescript": {
            "main": "lib/typescript.js",  // Main TypeScript library file
            "meta": {
                "lib/typescript.js": {
                    "exports": "ts"  // Exports TypeScript as "ts" for SystemJS
                }
            }
        }
    },
    
    // Map paths to the required dependencies
    map: {
        // Path to the plugin-typescript library files
        "plugin-typescript": "node_modules/plugin-typescript/lib/",
        
        /* NOTE: The following path configuration assumes npm 3+ (node 6+).
           If using npm 2, adjust the typescript path to:
           "node_modules/plugin-typescript/node_modules/typescript" */
        
        // Path to the TypeScript library files
        "typescript": "node_modules/typescript/"
    },

    // Specifies plugin-typescript as the transpiler for TypeScript files
    transpiler: "plugin-typescript",

    // Metadata for specific modules
    meta: {
        // Configure hello.ts to use ECMAScript module format and load with plugin-typescript
        "./hello.ts": {
            format: "esm",
            loader: "plugin-typescript"
        }
    },

    // Options for the TypeScript transpiler
    typescriptOptions: {
        typeCheck: 'strict'  // Enable strict type checking for TypeScript files
    }
});
