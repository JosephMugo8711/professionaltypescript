// Declare public variables and methods type in the interface to define how other typescript code can interact with it
//  create an interface ISampleClassInterface and a class SampleClass that implements the interface.
interface ISampleClassInterface {
    sampleVariable: string;

    sampleMethod(): void;

    optionalVariable?: string;
}

// Here we create a class that implememnts the interface
class SampleClass implements ISampleClassInterface {
    public sampleVariable: string;
    private answerToLifeTheUniverseAndEverything: number;

    constructor() {
        this.sampleVariable = "Hello World!";
        this.answerToLifeTheUniverseAndEverything = 42;
    }

    public sampleMethod(): void {
        console.log(this.sampleVariable);
        console.log(this.answerToLifeTheUniverseAndEverything);
    }

    private answer(q: any): number {
        return this.answerToLifeTheUniverseAndEverything
    }

    
}



// Create an instance of SampleClass and call its methods
let sampleClass = new SampleClass();
sampleClass.sampleMethod();
console.log(sampleClass.sampleMethod());
//console.log(sampleClass.answer("42")); // Output: 42
console.log(sampleClass.sampleVariable); // Output: Hello World!
console.log(sampleClass.sampleVariable === undefined); // Output: false


