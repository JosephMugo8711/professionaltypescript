class Tesla {
    constructor() {
        this.position = 0;
        this.speed = 42;
    }
    move() {
        this.position += this.speed;
    }
}
class SelfDrivingCar extends Tesla {
    move() {
        super.move();
        super.move();
    }
}
