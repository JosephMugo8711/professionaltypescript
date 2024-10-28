declare class Result2<T> {
    wasSuccessful: boolean;
    error: T;
    constructor(wasSuccessful: boolean, error: T);
    clone(): Result2<T>;
}
declare let r1: Result<string>;
declare let r2: Result<number>;
declare let r3: Result<string>;
