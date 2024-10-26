class Van {
    constructor() {
        this.position = 0;
        this.speed = 42;
    }
    move() {
        this.position += this.speed;
    }
}
var van = new Van();
van.move();
console.log(van.position);
