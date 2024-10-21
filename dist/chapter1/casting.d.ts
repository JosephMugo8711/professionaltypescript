interface MyInterface {
    commonMethod(): void;
}
declare class MyClass implements MyInterface {
    commonMethod(): void;
    someSpecificMethod(): void;
}
declare let derived: MyInterface;
