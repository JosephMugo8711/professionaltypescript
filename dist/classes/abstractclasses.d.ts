declare abstract class Machine {
    manufacturer: string;
    constructor(manufacturer: string);
    summary(): string;
    abstract moreInfo(): string;
}
declare class Car extends Machine {
    position: number;
    protected speed: number;
    constructor(manufacturer: string, position: number, speed: number);
    move(): void;
    move2(): void;
    moreInfo(): string;
}
declare let myCar: Car;
declare let myCar2: Car;
