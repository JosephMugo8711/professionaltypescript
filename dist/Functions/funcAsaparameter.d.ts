declare function foo99(otherFunc: Function): void;
declare function foo11(constructorFunc: {
    new (): any;
}): void;
declare function fool(constructorFunc: {
    new (): any;
}): void;
declare class ExampleClass {
    constructor();
}
declare function fooWithParams(constructorWithParamsFunc: {
    new (num: number): any;
}): void;
declare class ParametrizedClass {
    value: number;
    constructor(num: number);
}
interface IConstructor {
    new (): any;
}
declare function jiji(constructorFunc2: IConstructor): void;
interface INumberConstructor {
    new (num: number): any;
}
declare function foo33(constructorFunc2: INumberConstructor): void;
interface ITConstructor<T, U> {
    new (item: T): U;
}
declare function foo44<T, U>(constructorFunc2: ITConstructor<T, U>, item: T): U;
interface IFunction {
    (): void;
}
declare function foo55(otherFunc: IFunction): void;
interface INumberFunction {
    (num: number): void;
}
declare function foo88(func: INumberFunction): void;
interface ITFunc<T, U> {
    (item: T): U;
}
declare function foo10<T, U>(func: ITFunc<T, U>, item: T): U;
