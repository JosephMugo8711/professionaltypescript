// receiving a function as a parameter

function foo99(otherFunc: Function): void {

}

// if we want to receive a constructor as a parameter
function foo11(constructorFunc:  { new()}) {
    new constructorFunc();
}




// receiving a constructor as a parameter
// Define a function 'fool' that receives a constructor with no parameters
// The type '{ new() }' indicates the constructor function takes no arguments.
function fool(constructorFunc: { new(): any }) {
    // We instantiate the class using the constructor function provided.
    const instance = new constructorFunc();
    
    // Logging the instance to demonstrate that the constructor was invoked.
    console.log("Instance created:", instance);
}

// Example class with a parameterless constructor
class ExampleClass {
    constructor() {
        console.log("ExampleClass instantiated");
    }
}

// Call 'foo' and pass 'ExampleClass' as the constructor function
fool(ExampleClass);


// Define a function 'fooWithParams' that receives a constructor with one parameter.
// The type '{ new(num: number) }' indicates that the constructor takes a single number argument.
function fooWithParams(constructorWithParamsFunc: { new(num: number): any }) {
    // Instantiate the class by passing the required parameter to the constructor.
    const instance = new constructorWithParamsFunc(42);
    
    // Log the created instance to ensure the constructor was called with the correct argument.
    console.log("Instance with params created:", instance);
}

// Example class with a constructor that takes one number parameter
class ParametrizedClass {
    value: number;
    
    constructor(num: number) {
        this.value = num;
        console.log(`ParametrizedClass instantiated with value: ${num}`);
    }
}

// Call 'fooWithParams' and pass 'ParametrizedClass' as the constructor function
fooWithParams(ParametrizedClass);

// Interface for a constructor without parameters
// 'new()' defines a constructor signature that takes no arguments and returns an instance of a class.
interface IConstructor {
    new (): any;
}

// Function that accepts a constructor with no parameters and creates an instance
function jiji(constructorFunc2: IConstructor) {
    // Create a new instance from the constructor
    const instance = new constructorFunc2();
    console.log("Instance created:", instance);
}

// Interface for a constructor with a single numeric parameter
// 'new(num: number)' specifies that the constructor takes a number and returns an instance.
interface INumberConstructor {
    new (num: number): any;
}

// Function that accepts a constructor with a numeric parameter and creates an instance
function foo33(constructorFunc2: INumberConstructor) {
    // Instantiate using the constructor, passing 42 as the argument
    const instance = new constructorFunc2(42);
    console.log("Instance created with parameter:", instance);
}

// Using generics to define a flexible constructor interface
// T is the type of the input parameter, and U is the type of the instance returned.
interface ITConstructor<T, U> {
    new (item: T): U;
}

// Function that takes a generic constructor and instantiates it with a given item
function foo44<T, U>(constructorFunc2: ITConstructor<T, U>, item: T): U {
    // Create a new instance with the provided item as the argument
    return new constructorFunc2(item);
}

// Define a function interface (not a constructor) that takes no parameters and returns nothing
interface IFunction {
    (): void;
}

// Function that accepts a simple function (not a constructor) and invokes it
function foo55(otherFunc: IFunction) {
    otherFunc(); // Execute the function passed as a parameter
}

// Interface for a function that takes a number as a parameter
interface INumberFunction {
    (num: number): void;
}

// Function that takes a function requiring a numeric argument and invokes it
function foo88(func: INumberFunction) {
    // Call the function with the number 1 as the argument
    func(1);
}

// Using generics for a function interface
// T is the type of the input argument, and U is the return type of the function.
interface ITFunc<T, U> {
    (item: T): U;
}

// Generic function that accepts a function with input type T and output type U
function foo10<T, U>(func: ITFunc<T, U>, item: T): U {
    // Call the function with the item and return the result
    // Corrected 'contructorFunc' to 'func' to match the function parameter name.
    return func(item); 
}
