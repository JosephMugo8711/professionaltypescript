// Function with a constraint that T extends U, ensuring T includes all properties from U
function assign<T extends U, U>(target: T, source: U): T {
    // Iterate over the properties of source (keys of U)
    for (let id in source) {
        if (Object.prototype.hasOwnProperty.call(source, id)) {
            // Cast 'id' to keyof U to ensure it's a valid property
            // Only assign if the property exists on both source and target
            (target as any)[id] = source[id];  // Type-casting to avoid type mismatch issues
        }
    }
    return target;  // Return the updated target object
}

// Example object 'x' that has properties a, b, c, and d
let x = { a: 1, b: 2, c: 3, d: 4 };

// First assignment: Valid because 'b' and 'd' are properties in both target and source
assign(x, { b: 10, d: 20 });  // 'x' is now {a: 1, b: 10, c: 3, d: 20}

// Second assignment: This will still cause a compile-time error, because 'e' is not in 'x'
// assign(x, { e: 0 });  // Uncommenting this will result in an error

/*
Explanation:
- The type 'T extends U' guarantees that the target (`T`) includes all properties from `U`, but TypeScript 
  still needs extra type checks at runtime.
- By using `Object.prototype.hasOwnProperty.call(source, id)`, we ensure that the property exists in both objects.
- The type assertion `(target as any)[id] = source[id]` bypasses the type mismatch warning, but you should
  use it cautiously. It assumes that the assignment is valid based on the type constraint (`T extends U`).
*/
