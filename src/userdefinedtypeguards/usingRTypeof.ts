//typeof is used when you need to distinguish between type numbers, string, boolean, and symbol
// Other string constants will not error, but won't be used to narrow types either

// Unlike instanceof, typeof will work with a variable of any type
// In the example below, foo could be typed as number  | string without issue

function example5(foo: any){
    if (typeof foo === "number") {
        console.log(foo + 100);
    } else if (typeof foo === "string") {
        console.log("It's a string: " + foo);
    } else {
        console.log("I don't know what this is!");
    }
}

example5(100);
example5("hello world");