class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return `Hello, ${this.greeting}`;
    }
}
let greeter = new Greeter("Hello, Vybz!");
console.log(greeter.greet());
