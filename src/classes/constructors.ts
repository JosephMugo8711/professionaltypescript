class Ford {
    public position: number;
    protected speed: number;

    constructor(position: number, speed: number){
        this.position = position
        this.speed = speed;
    }

    move() {
        this.position += this.speed
    }
}

// All this code can be resumed in one single constructor
class FordMustang {
    constructor(public position: number, protected speed: number){ }

    move() {
        this.position =+ this.speed;
    }
}

// both will be transpiled from typescript (design time and compile time) to javascript with same result
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


// constructors of derived classes have to call the base class constructor with super()

class SelfDrivingFord extends Ford {
    constructor(startAutoPilot: boolean) {
        super(0, 42);
        if (startAutoPilot) {
            this.move();
        }
    }
}

let car = new SelfDrivingFord(true);
console.log(car.position)  // access the public property position