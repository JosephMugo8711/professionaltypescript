var age = 26;
var degrees = 20.4;
console.log(age);
console.log(degrees);
let fullname = "Joseph Mugo";
console.log(fullname);
let fullstack = true;
var weakness = false;
console.log(fullstack);
console.log(weakness);
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
let cities = ["Kimbo", "Makongeni", "Kikuyu"];
console.log(cities);
let numbers2 = [1, 2, 3, 4];
console.log(numbers2);
let colors = ["red", "blue", "green"];
console.log(colors);
let person = ["Joseph", 30, true];
console.log(person);
let strengthweakness = [true, "I am a winner"];
console.log(strengthweakness);
let personObject = {
    name: "Joseph",
    age: 26,
    isFullstack: true
};
console.log(personObject);
let personObject2 = {
    name: 26,
    age: 26,
};
console.log(personObject2);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
let color = Color.Blue;
console.log(color);
console.log(Color[1]);
var Animal;
(function (Animal) {
    Animal["Dog"] = "jimmy";
    Animal["Cat"] = "chris";
    Animal["Bird"] = "Jowamu";
})(Animal || (Animal = {}));
;
let animal = Animal.Dog;
console.log(Animal);
function greet(name) {
    return "Hello " + name;
}
console.log(greet(1));
function getSum() {
    return 1 + 2;
}
console.log(getSum());
function loveself(feeling, word) {
    console.log("I love myself " + feeling + (word ? " with " + word : ""));
}
loveself("completely");
loveself("Unconditionally", true);
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(1, 2));
function multiplyNumbers(a, b) {
    return a * b;
}
let randomValue;
randomValue = 26;
console.log(randomValue);
randomValue = "Joseph";
console.log(randomValue);
randomValue = true;
console.log(randomValue);
randomValue = { name: "Jowamu", age: 26 };
console.log(randomValue);
function sayHello() {
    console.log("Hello");
}
sayHello();
let unusable;
unusable = undefined;
unusable = null;
console.log(unusable);
let foo;
console.log(foo);
function error(message) {
    throw new Error(message);
}
error("I am the best");
let myValue = null;
console.log(myValue);
let myValue2 = null;
myValue2 = "Evanso mkuu";
console.log(myValue);
myValue2 = null;
console.log(myValue);
