var result = {
    wasSuccessful: false,
    error: "An error occurred"
};
var errorMessage = result.error;
console.log(errorMessage);
var runnable = {
    run: (input) => input.length
};
var inputString = "Test input";
var resultLength = runnable.run(inputString);
console.log(resultLength);
class Result {
    constructor(wasSuccessful, error) {
        this.wasSuccessful = wasSuccessful;
        this.error = error;
    }
    clone() {
        return new Result(this.wasSuccessful, this.error);
    }
}
class StringResult {
    constructor(wasSuccessful, error) {
        this.wasSuccessful = wasSuccessful;
        this.error = error;
    }
    clone() {
        return new StringResult(this.wasSuccessful, this.error);
    }
}
let result1 = new Result(true, null);
let clonedResult1 = result1.clone();
let stringResult = new StringResult(false, "An error occurred");
let clonedStringResult = stringResult.clone();
console.log(clonedStringResult.error);
