declare function addMetadata(target: any): any;
declare class Person {
    private _name;
    constructor(name: string);
    greet(): string;
}
declare function getMetadataFromClass(target: any): any;
declare function getMetadataFromInsatnace(target: any): any;
declare let person1: Person;
declare let person2: Person;
