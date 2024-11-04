function isString(test) {
    return typeof test === "string";
}
function example(foo) {
    if (isString(foo)) {
        console.log("It's a string: " + foo);
    }
    else {
        console.log("don't know what this is! [" + foo + "]");
    }
}
example("hello world");
example({ something: "else" });
function isJQuery(foo) {
    return foo.jquery !== undefined;
}
