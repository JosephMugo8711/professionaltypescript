class SampleClass {
    constructor() {
        this.sampleVariable = "Hello World!";
        this.answerToLifeTheUniverseAndEverything = 42;
    }
    sampleMethod() {
        console.log(this.sampleVariable);
        console.log(this.answerToLifeTheUniverseAndEverything);
    }
    answer(q) {
        return this.answerToLifeTheUniverseAndEverything;
    }
}
let sampleClass = new SampleClass();
sampleClass.sampleMethod();
console.log(sampleClass.sampleMethod());
console.log(sampleClass.sampleVariable);
console.log(sampleClass.sampleVariable === undefined);
