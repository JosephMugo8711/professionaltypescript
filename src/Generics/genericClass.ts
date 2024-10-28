class Result2<T> {
    constructor(public wasSuccessful: boolean, public error: T) {
    }

    public clone(): Result2<T> {
        return new Result2<T>(this.wasSuccessful, this.error);
    }
}

let r1 = new Result(false, 'error: 42'); // Compiler infers T to string
let r2 = new Result(false, 42);  // Compiler infers T to number
let r3 = new Result<string>(true, null); // Explicitly set T to string
//let r4 = new Result<string>(true, 4);  // Compilation error because 4 is not a string

