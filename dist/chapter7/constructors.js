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
