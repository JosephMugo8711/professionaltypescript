interface ISampleClassInterface {
    sampleVariable: string;
    sampleMethod(): void;
    optionalVariable?: string;
}
declare class SampleClass implements ISampleClassInterface {
    sampleVariable: string;
    private answerToLifeTheUniverseAndEverything;
    constructor();
    sampleMethod(): void;
    private answer;
}
declare let sampleClass: SampleClass;
