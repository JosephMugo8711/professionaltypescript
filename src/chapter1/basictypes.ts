// numbers
// integers and floating point numbers

var age: number = 26;
var degrees: number = 20.4;
console.log(age);
console.log(degrees);

// string

let fullname: string = "Joseph Mugo"
console.log(fullname)

// boolean
let fullstack: boolean = true;
var weakness: boolean = false;

console.log(fullstack)
console.log(weakness)

// Array
// there are two equivalent ways to define array types in typescript
// using T[] notation
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);

let cities: string[] = ["Kimbo", "Makongeni", "Kikuyu"];
console.log(cities);


// Using Array<T> notation 
let numbers2: Array<number> = [1, 2, 3, 4];
console.log(numbers2);
let colors: Array<string> = ["red", "blue", "green"];
console.log(colors);


// Tuples. Tuples have a fixed number of elements specific types

let person: [string, number, boolean] = ["Joseph", 30, true];
console.log(person);

let strengthweakness: [boolean, string] = [true, "I am a winner"];
console.log(strengthweakness);


// object - you can define its properties or indexer
let personObject: { name: string, age: number, isFullstack: boolean } = {
  name: "Joseph",
  age: 26,
  isFullstack: true
};
console.log(personObject);

let personObject2: {[key: string]: number} = {
    name: 26,
    age: 26,
}

console.log(personObject2)


// enum 
// maping colors to numbers
enum Color { 
    Red = 0, 
    Blue = 1, 
    Green = 2 
};
let color: Color = Color.Blue;
console.log(color);
console.log(Color[1])

enum Animal { Dog = "jimmy", Cat = "chris", Bird = "Jowamu" };
let animal: Animal = Animal.Dog;

console.log(Animal)


// function - you specify types for the parameters and return value
// (param: number) => string - function taking one number parameter returning string
function greet(name: number): string {
    return "Hello " + name;
}
console.log(greet(1));

// () => number - function with no parameters returning an number.
function getSum(): number {
    return 1 + 2;
}
console.log(getSum());

// (a: string, b?: boolean) => void - function taking a string and an optional boolean with no return value
// key points
// the word parameter is optional (denoted by the ?)
// The return type is void, meaning the function doesn't return any value
function loveself(feeling: string, word?: boolean): void {
    console.log("I love myself " + feeling + (word? " with " + word : ""));
}

loveself("completely"); // output: I love myself completely
loveself("Unconditionally", true); // output: I love myself unconditionally with  true

function addNumbers(a: number, b: number): number {
    return a + b;
}
console.log(addNumbers(1, 2));

function multiplyNumbers(a: number, b: number): number {
    return a * b;
}




// any type
// randomValue variable can hold a number, string, boolean, or even an object without causing any type errors because it's declared as any
let randomValue: any;

randomValue = 26;
console.log(randomValue)
randomValue = "Joseph";
console.log(randomValue)
randomValue = true;
console.log(randomValue)

// NO type checking is enforced, so this works even though its unconventional
randomValue = { name: "Jowamu", age: 26};
console.log(randomValue) // Output: { name: "Alice", age: 30 }



// void
function sayHello(): void {
    console.log("Hello");
}

sayHello(); // output: Hello


let unusable: void;

unusable = undefined; // valid
unusable = null;  // valid (in --strictNullChecks mode, only undefined is allowed

console.log(unusable) // output: undefined

// never

let foo: never;  // as the type of variables under type guards that are never true
console.log(foo);


// As the return type of functions that never return
function error(message: string): never {
    throw new Error(message);
}

// Calling the function to throw the error
error("I am the best"); // This will throw an error and terminate the program

// null types
// Without strictNullChecks: null can be assigned to any type, like string, number, boolean, 
let myValue: string = null; // This works because 'null' is part of every type without strict null checks
console.log(myValue) // output: null

// When strict null checks are enabled, null cannot be assigned to a variable of type string unless you explicitly allow it using a union type.
// With strictNullChecks: null must be explicitly allowed, typically through union types (e.g., string | null).
let myValue2: string | null = null; // This works because 'null' is a subtype of string

myValue2 = "Evanso mkuu";
console.log(myValue)

myValue2 = null;  // Can also be reassigned to null
console.log(myValue) // output: null
