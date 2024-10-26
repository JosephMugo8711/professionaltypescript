function foo99(otherFunc) {
}
function foo11(constructorFunc) {
    new constructorFunc();
}
function fool(constructorFunc) {
    const instance = new constructorFunc();
    console.log("Instance created:", instance);
}
class ExampleClass {
    constructor() {
        console.log("ExampleClass instantiated");
    }
}
fool(ExampleClass);
function fooWithParams(constructorWithParamsFunc) {
    const instance = new constructorWithParamsFunc(42);
    console.log("Instance with params created:", instance);
}
class ParametrizedClass {
    constructor(num) {
        this.value = num;
        console.log(`ParametrizedClass instantiated with value: ${num}`);
    }
}
fooWithParams(ParametrizedClass);
function jiji(constructorFunc2) {
    const instance = new constructorFunc2();
    console.log("Instance created:", instance);
}
function foo33(constructorFunc2) {
    const instance = new constructorFunc2(42);
    console.log("Instance created with parameter:", instance);
}
function foo44(constructorFunc2, item) {
    return new constructorFunc2(item);
}
function foo55(otherFunc) {
    otherFunc();
}
function foo88(func) {
    func(1);
}
function foo10(func, item) {
    return func(item);
}
