declare var age: number;
declare var degrees: number;
declare let fullname: string;
declare let fullstack: boolean;
declare var weakness: boolean;
declare let numbers: number[];
declare let cities: string[];
declare let numbers2: Array<number>;
declare let colors: Array<string>;
declare let person: [string, number, boolean];
declare let strengthweakness: [boolean, string];
declare let personObject: {
    name: string;
    age: number;
    isFullstack: boolean;
};
declare let personObject2: {
    [key: string]: number;
};
declare enum Color {
    Red = 0,
    Blue = 1,
    Green = 2
}
declare let color: Color;
declare enum Animal {
    Dog = "jimmy",
    Cat = "chris",
    Bird = "Jowamu"
}
declare let animal: Animal;
declare function greet(name: number): string;
declare function getSum(): number;
declare function loveself(feeling: string, word?: boolean): void;
declare function addNumbers(a: number, b: number): number;
declare function multiplyNumbers(a: number, b: number): number;
declare let randomValue: any;
declare function sayHello(): void;
declare let unusable: void;
declare let foo: never;
declare function error(message: string): never;
declare let myValue: string;
declare let myValue2: string | null;
