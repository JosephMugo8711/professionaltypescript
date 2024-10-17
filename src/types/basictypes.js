"use strict";
// numbers
// integers and floating point numbers
var age = 26;
var degrees = 20.4;
console.log(age);
console.log(degrees);
// string
let fullname = "Joseph Mugo";
console.log(fullname);
// boolean
let fullstack = true;
var weakness = false;
console.log(fullstack);
console.log(weakness);
// Array
// there are two equivalent ways to define array types in typescript
// using T[] notation
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
let cities = ["Kimbo", "Makongeni", "Kikuyu"];
console.log(cities);
// Using Array<T> notation 
let numbers2 = [1, 2, 3, 4];
console.log(numbers2);
let colors = ["red", "blue", "green"];
console.log(colors);
// Tuples. Tuples have a fixed number of elements specific types
let person = ["Joseph", 30, true];
console.log(person);
let strengthweakness = [true, "I am a winner"];
console.log(strengthweakness);
// object - you can define its properties or indexer
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
// enum 
// maping colors to numbers
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
// function - you specify types for the parameters and return value
// (param: number) => string - function taking one number parameter returning string
function greet(name) {
    return "Hello " + name;
}
console.log(greet(1));
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(1, 2));
function multiplyNumbers(a, b) {
    return a * b;
}
