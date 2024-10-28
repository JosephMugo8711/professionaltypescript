interface IResult<T> {
    wasSuccessful: boolean;
    error: T;
}
declare var result: IResult<string>;
declare var errorMessage: string;
interface IRunnable<T, U> {
    run(input: T): U;
}
declare var runnable: IRunnable<string, number>;
declare var inputString: string;
declare var resultLength: number;
interface ICloneableResult<T> extends IResult<T> {
    clone(): IResult<T>;
}
declare class Result<T> implements ICloneableResult<T> {
    wasSuccessful: boolean;
    error: T;
    constructor(wasSuccessful: boolean, error: T);
    clone(): IResult<T>;
}
declare class StringResult implements ICloneableResult<string> {
    wasSuccessful: boolean;
    error: string;
    constructor(wasSuccessful: boolean, error: string);
    clone(): IResult<string>;
}
declare let result1: Result<boolean>;
declare let clonedResult1: IResult<boolean>;
declare let stringResult: StringResult;
declare let clonedStringResult: IResult<string>;
