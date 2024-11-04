class CarModel {
    constructor(name, engineCapacity) {
        this.name = name;
        this.engineCapacity = engineCapacity;
    }
    describeCarModel() {
        return `This ${this.name} has an engine capacity of ${this.engineCapacity} liters.`;
    }
}
console.log(new CarModel("Ford mustang", "4000cc").describeCarModel());
class HondaCar extends CarModel {
    constructor(name, engineCapacity, numberOfDoors) {
        super(name, engineCapacity);
        this.numberOfDoors = numberOfDoors;
    }
    describeHondaCar() {
        return super.describeCarModel() + ` It has ${this.numberOfDoors} doors.`;
    }
}
console.log(new HondaCar("Honda CR-V", "4500cc", 4).describeHondaCar());
