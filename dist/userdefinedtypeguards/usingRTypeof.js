function example5(foo) {
    if (typeof foo === "number") {
        console.log(foo + 100);
    }
    else if (typeof foo === "string") {
        console.log("It's a string: " + foo);
    }
    else {
        console.log("I don't know what this is!");
    }
}
example5(100);
example5("hello world");
