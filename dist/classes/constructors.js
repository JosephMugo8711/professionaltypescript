class Ford {
    constructor(position, speed) {
        this.position = position;
        this.speed = speed;
    }
    move() {
        this.position += this.speed;
    }
}
class FordMustang {
    constructor(position, speed) {
        this.position = position;
        this.speed = speed;
    }
    move() {
        this.position = +this.speed;
    }
}
var Ford2 = (function () {
    function Car(position, speed) {
        this.position = position;
        this.speed = speed;
    }
    Car.prototype.move = function () {
        this.position += this.speed;
    };
    return Car;
}());
class SelfDrivingFord extends Ford {
    constructor(startAutoPilot) {
        super(0, 42);
        if (startAutoPilot) {
            this.move();
        }
    }
}
let car = new SelfDrivingFord(true);
console.log(car.position);
