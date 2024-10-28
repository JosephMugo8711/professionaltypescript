//Let's suppose we have a reference to the JQuery type definition and we want to extend it to have additional 
// functions from a plugin we included and which doesn't have an official type definition.
// We can easily extend it by declaring functions added by plugin in a separate interface declaration with the same JQuery name

interface JQuery {
    // Add the functions from the plugin here
    pluginFunctionThatDoesNothing(): void;

    // create chainable function
    manipulateDOM(arg0: HTMLElement): JQuery;
}

// The compiler will merge all declarations with the same name into one -
// https://www.typescriptlang.org/docs/handbook/declaration-merging.html
