declare class Ford {
    position: number;
    protected speed: number;
    constructor(position: number, speed: number);
    move(): void;
}
declare class FordMustang {
    position: number;
    protected speed: number;
    constructor(position: number, speed: number);
    move(): void;
}
declare var Ford2: (position: any, speed: any) => void;
declare class SelfDrivingFord extends Ford {
    constructor(startAutoPilot: boolean);
}
declare let car: SelfDrivingFord;
