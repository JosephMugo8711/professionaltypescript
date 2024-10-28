// Declaring a generic interface that accepts a type parameter T
interface IResult<T> {
    wasSuccessful: boolean;  // Indicates if the operation was successful
    error: T;  // Holds the error of type T
}

// Initializing an instance of the generic interface with a string type
var result: IResult<string> = {
    wasSuccessful: false,  // Setting the success flag to false
    error: "An error occurred"  // Assigning a string error message
};

// Accessing the error field from the result object
var errorMessage: string = result.error;

console.log(errorMessage); // Output: "An error occurred"

// Generic interface with multiple type parameters T and U
interface IRunnable<T, U> {
    run(input: T): U;  // Defines a method that takes input of type T and returns a value of type U
}

// Implementing the IRunnable interface with string as input and number as output
var runnable: IRunnable<string, number> = {
    // The run method takes a string input and returns its length (number)
    run: (input: string) => input.length
}

var inputString: string = "Test input";  // Declaring a string input

// Running the run method of the runnable object and storing the result (length of the string)
var resultLength: number = runnable.run(inputString);

console.log(resultLength); // Output: 10 (length of "Test input")

// Extending IResult with a new method clone() for deep copying
interface ICloneableResult<T> extends IResult<T> {
    clone(): IResult<T>;  // Method to create a copy of the result
}

// Implementing the generic interface with a class that accepts any type for error
class Result<T> implements ICloneableResult<T> {
    constructor(public wasSuccessful: boolean, public error: T) {}

    // Cloning the current object by creating a new instance with the same values
    public clone(): IResult<T> {
        return new Result<T>(this.wasSuccessful, this.error);
    }
}

// Implementing the interface with a non-generic class specifically for string error type
class StringResult implements ICloneableResult<string> {
    constructor(public wasSuccessful: boolean, public error: string) {}

    // Cloning the StringResult object and returning a new instance with the same values
    public clone(): IResult<string> {
        return new StringResult(this.wasSuccessful, this.error);
    }
}

// Example usage:

// Creating an instance of the generic Result class with boolean type for error
let result1 = new Result<boolean>(true, null);  // A successful result with no error
let clonedResult1 = result1.clone();  // Cloning the result1 object

// Creating an instance of the StringResult class for string error type
let stringResult = new StringResult(false, "An error occurred");  // A failed result with a string error
let clonedStringResult = stringResult.clone();  // Cloning the stringResult object

console.log(clonedStringResult.error); // Output: "An error occurred"
