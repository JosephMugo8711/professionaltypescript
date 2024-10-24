// i modify the Simple class to allow access to the speed property
// Typescript accessors allows us to add additional code in getters or setters

class Car3 {
    public position: number = 0;
    private _speed: number = 42;
    private _MAX_SPEED = 100

    move() {
        this.position += this._speed;
    }

    get speed(): number {
        return this._speed
    }

    set speed(value: number) {
        this._speed = Math.min(value, this._MAX_SPEED)
    }
}

let car1 = new Car3()
car1.speed = 120;
console.log(car1.speed); // 100
