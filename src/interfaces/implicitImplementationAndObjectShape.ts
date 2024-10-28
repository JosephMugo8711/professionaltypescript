// Typescript supports interfaces, but the compiler outputs Javascript, which doesn't
// There4, interfaces are effectively lost in the compile step
// This is why type checking on the interfaces relies on the shape of the object
// meaning whether the object supports the fields and functions on the interface-
// and not on whether the interface is actually implemented or not

interface IKickable {
    kick(distance: number): void;
}

class Ball {
    kick(distance: number): void {
        console.log(`Kicking the ball ${distance} meters.`);
    } // Ball implements the kick method
}

let kickable: IKickable = new Ball();
kickable.kick(10); // Outputs: Kicking the ball 10 meters.

// So even if Ball doesn't explicitly implement IKickable, a Ball instance may be assigned to (and manipulated as)
// an IKickable, even when the type is specified