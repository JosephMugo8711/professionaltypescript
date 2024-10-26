declare function withArgs(arg1: string, arg2: number): (target: any) => void;
declare function addMetadata1(metadata: any): (target: any) => any;
declare class Person1 {
    private _name;
    constructor(name: string);
    greet(): string;
}
declare function getMetadataFromClass1(target: any): any;
