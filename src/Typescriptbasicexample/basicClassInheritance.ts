// A basic class inheritance example using extends and super keyword

// A generic car class has some car properties and a description method

class CarModel {
    name: string;
    engineCapacity: string;


    constructor(name: string, engineCapacity: string) {
        this.name = name;
        this.engineCapacity = engineCapacity;
    }

    describeCarModel(){
        return `This ${this.name} has an engine capacity of ${this.engineCapacity} liters.`;
    }
}

console.log(new CarModel("Ford mustang", "4000cc").describeCarModel());

// HondaCar extends the existing generic car class and adds new property

class HondaCar extends CarModel {
    numberOfDoors: number;

    constructor(name: string, engineCapacity: string, numberOfDoors: number) {
        super(name, engineCapacity);
        this.numberOfDoors = numberOfDoors;
    }

    describeHondaCar(){
        return super.describeCarModel() + ` It has ${this.numberOfDoors} doors.`;
    }
}

console.log(new HondaCar("Honda CR-V", "4500cc", 4).describeHondaCar());


