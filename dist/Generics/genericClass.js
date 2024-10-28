class Result2 {
    constructor(wasSuccessful, error) {
        this.wasSuccessful = wasSuccessful;
        this.error = error;
    }
    clone() {
        return new Result2(this.wasSuccessful, this.error);
    }
}
let r1 = new Result(false, 'error: 42');
let r2 = new Result(false, 42);
let r3 = new Result(true, null);
