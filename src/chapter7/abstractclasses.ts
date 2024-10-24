// Defining a blueprint for other classes to follow
// Cannot be instantiated directly but can be used as a base class for other classes


abstract class Machine {  // base class
    // constructor takes a manufacturer argument and assigns it to the manufacturer property
    // this value will be passed whenever you create an instance of a class that extends Machine
    constructor(public manufacturer: string) {}
  
    // This is a concrete method that can be inherited
    // Returns a strings describing the machine
    // Any subclasses that extends Machine will inherit this method
    summary(): string {
      return `This machine is manufactured by ${this.manufacturer}`;
    }
  
    // Abstract method to be implemented by subclasses
    // Abstract method meaning that any subclass that extends Machine must implememnt the moreInfo
    // It forces subclasses to provide their own behavior for this method
    abstract moreInfo(): string;
  }

  // subclass

class Car extends Machine {
    // constructor takes manufacturer and position arguments and assigns them to the manufacturer and position properties
    constructor(manufacturer: string, public position: number, protected speed: number) {
      super(manufacturer);
    }
    move() {
        this.position += this.speed;
    }

    move2() {
        this.position -= this.speed;
    }

    moreInfo() {
        return `This is a car located at ${this.position} and going ${this.speed}mph!`
    }
}

let myCar = new Car("Konda", 10, 70);
let myCar2 = new Car("Konda", 60, 10);
myCar.move(); // position is now 80
myCar.move2(); // position is now 60
console.log(myCar.summary()); // prints "Konda makes this machine."
console.log(myCar.moreInfo()); // prints "This is a car located at 80 and going 70mph!"


// KEY POINTS
// You can't create an instance of an abstract class directly (e.g new Machine(...) would throw an error)
// Subclasses must implememnt the abstract method (moreInfo() in this case) inorder to be instantiable
// The abstract class can have both concrete methods (like summary()) and abstract methods