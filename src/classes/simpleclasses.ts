class Van {
    public position: number = 0;
    private speed: number = 42

    move() {
        this.position += this.speed
    }
}
// Class Van
// Has three members
// A private property speed
// A public property position
// A public method move 
// Each member is public by default

var van = new Van(); // create an instance of Van (object)
van.move(); // call a method
console.log(van.position); // access a public property