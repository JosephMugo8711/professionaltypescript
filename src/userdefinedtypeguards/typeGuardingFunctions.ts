// You can declare functions that serve as type guards using any logic you'd like
// THey take the form

// function functionName(variableName: any): variableName is DesiredType { 
//     // Your logic here to check if the variable is of the desired type
//     // If it is, return true, otherwise return false.
//     // For example:
//    
// }

// If the return returns true, Typescript will narrow the type to DesiredType in any block guarded by a call to the function
// If the return returns false, Typescript will not narrow the type
function isString(test: string): test is string {
    return typeof test === "string";
}

function example(foo: any) {
    if (isString(foo)) {
        // Typescript will now only allow foo to be a string, and all other values will be ignored
        console.log("It's a string: " + foo);
    } else {
        // foo is type any in this block
        console.log("don't know what this is! [" + foo + "]");
    }
}

example("hello world");  // prints "it's a string: hello world"
example({ something: "else"});  // prints "dont know what this is! [[object object"

// A guard's function type predicate (the foo is Bar in the function type position) is used at compile time to narrow types,
// THe function body is used at runtime
// The type predicate and function must agree, or your code won't work.


// Type guard functions don't have to use typeof or instanceof, they can use more complicated logic
// For example, this code determines if you've got a jQuery object by checking for its version string

function isJQuery(foo): foo is JQuery {
    // test for JQuery versions string
    return foo.jquery !== undefined;
}

// function example1(foo) {

//     if (isJQuery(foo)) {
//         // foo is typed JQuery here
//         foo.eq(0);
//     }
// }
