// Creating a very simple subclass of the Tesla Class using the extends keyword
// The SelfDrivingCar class overrides the move() method and uses the base class implementation using super


class Tesla {
    public position: number = 0;
    protected speed: number = 42;

    move() {
        // increasing the Tesla's position by its speed
        this.position += this.speed
    }
}

class SelfDrivingCar extends Tesla {
    move() {
        // start moving around :-)
       // The move() method calls super.move() twice. This means it runs the Tesla class's move() method twice, effectively moving the car forward twice.
        super.move()
        super.move()
    }
}