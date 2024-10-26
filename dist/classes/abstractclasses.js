class Machine {
    constructor(manufacturer) {
        this.manufacturer = manufacturer;
    }
    summary() {
        return `This machine is manufactured by ${this.manufacturer}`;
    }
}
class Car extends Machine {
    constructor(manufacturer, position, speed) {
        super(manufacturer);
        this.position = position;
        this.speed = speed;
    }
    move() {
        this.position += this.speed;
    }
    move2() {
        this.position -= this.speed;
    }
    moreInfo() {
        return `This is a car located at ${this.position} and going ${this.speed}mph!`;
    }
}
let myCar = new Car("Konda", 10, 70);
let myCar2 = new Car("Konda", 60, 10);
myCar.move();
myCar.move2();
console.log(myCar.summary());
console.log(myCar.moreInfo());
