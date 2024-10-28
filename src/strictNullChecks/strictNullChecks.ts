// By default, all types in TypeScript allow null values, meaning you can pass null where a certain type is expected.
// This can lead to runtime errors if not handled properly.

function getId(x: Element) {
    // This function tries to return the id of an Element. However, if x is null, it will cause a runtime error.
    return x.id; // If x is null, this will throw an error at runtime.
}

// Example usage that causes a runtime error:
getId(null); // TypeScript does not complain here, but this is a runtime error because 'null' is passed.

// TypeScript 2.0 introduces support for strict null checks. 
// If you set --strictNullChecks when running TypeScript (tsc), or set this flag in your tsconfig.json file,
// then types will no longer allow null by default, leading to safer code.

function getId1(x: Element) {
    // In this function, x is expected to be of type Element only, not null.
    return x.id; // This line is safe, assuming x is always an Element.
}

// Example usage that will cause a compile-time error due to strict null checks:
getId1(null); // Error: Argument of type 'null' is not assignable to parameter of type 'Element'

// To allow for null values, you must explicitly permit them in your type definitions:
function getId2(x: Element | null) {
    // Here, x can either be an Element or null.
    return x.id; // This will produce a compile-time error because TypeScript knows x can be null.
}

// Example usage that shows the compile-time error:
getId2(null); // Error: Object is possibly 'null'. TypeScript warns us that we need to handle the null case.

// Using a type guard allows TypeScript to understand the possible states of the variable and handle them accordingly.
// A type guard checks if the value is non-null before proceeding.

function getId3(x: Element | null) {
    // We check if x is truthy (i.e., not null or undefined).
    if (x) {
        // If x is truthy, TypeScript narrows the type of x to Element within this block.
        return x.id; // This is safe; TypeScript knows x is definitely an Element here.
    } else {
        // If x is falsy, we handle the null case explicitly.
        return null; // Here, we explicitly return null if x is null.
    }
}

// Example usage that safely handles null:
const id = getId3(null); // This will work fine now; id can either be a string or null.

getId3(null);