class Car3 {
    constructor() {
        this.position = 0;
        this._speed = 42;
        this._MAX_SPEED = 100;
    }
    move() {
        this.position += this._speed;
    }
    get speed() {
        return this._speed;
    }
    set speed(value) {
        this._speed = Math.min(value, this._MAX_SPEED);
    }
}
let car1 = new Car3();
car1.speed = 120;
console.log(car1.speed);
