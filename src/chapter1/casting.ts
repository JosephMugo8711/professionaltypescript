// 1. YOu can perform casting through angle brackets

// derived class which is treated by the compiler as a Myinterface
// Without casting on the second line the compiler would throw an exception as it does not understand someSpecificMethod()
// but casting through <ImplementingClass> derived suggests the ompiler what to do

// var derived: MyInterface;
// (<ImplementingClass>derived).someSpecificMethod();


// Another way of casting in Typescript is using the as keyword
// var derived: MyInterface;
// (derived as ImplementingClass). someSpecificMethod()

// creating an interface  and a class that implememnts that interface

// define Myinterface with a commonMethod()
interface  MyInterface {
    age: number;
    commonMethod(): void;
}


// class implementing the interface
// MyClass implements MyInterface but also has an additional method someSpecificMethod()
class MyClass implements MyInterface {
    age: number;
    commonMethod() {
        console.log("Called commonMethod from Myinterface");
    }

    // A method specific to ImplementingClass
    someSpecificMethod() {
        console.log("Called someSpecificMethod from ImplementingClass");
    }
}

// Declare a variable of type Myinterface
let derived: MyInterface = new MyClass();

// Casting using angle brackets (older syntax)
// cast the derived variable to ImplementingClass to access the someSpecificMethod()
(<MyClass>derived).someSpecificMethod(); // Output: Called someSpecificMethod

// Casting using the as keyword (newer syntax)
// Using as: (derived as ImplementingClass) to do the same casting
(derived as MyClass).someSpecificMethod(); // Output: Called someSpecificMethod

