interface MyInterface {
    age: number;
    commonMethod(): void;
}
declare class MyClass implements MyInterface {
    age: number;
    commonMethod(): void;
    someSpecificMethod(): void;
}
declare let derived: MyInterface;
