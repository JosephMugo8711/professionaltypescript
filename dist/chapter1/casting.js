class MyClass {
    commonMethod() {
        console.log("Called commonMethod from Myinterface");
    }
    someSpecificMethod() {
        console.log("Called someSpecificMethod from ImplementingClass");
    }
}
let derived = new MyClass();
derived.someSpecificMethod();
derived.someSpecificMethod();
