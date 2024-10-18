// we have a class Greeter
class Greeter {
    // property declaration
    greeting: string;
 
    // THe constructor initializes the class with a provided message
    constructor(message: string) {
        this.greeting = message;
    }

    // a greet method
    // A greet method that returns a greeting message, using the stored greeting
    greet(): string {
        return `Hello, ${this.greeting}`;
    }
}

// I create an instance of the Greeter class ussing the new keyword 
// Passing "Hello, Vybz!" as the message to the constructor
let greeter = new Greeter("Hello, Vybz!")

// call the greet method on the greeter instance to display the greeting
console.log(greeter.greet()); // Output: Hello, Vybz!