declare class CarModel {
    name: string;
    engineCapacity: string;
    constructor(name: string, engineCapacity: string);
    describeCarModel(): string;
}
declare class HondaCar extends CarModel {
    numberOfDoors: number;
    constructor(name: string, engineCapacity: string, numberOfDoors: number);
    describeHondaCar(): string;
}
