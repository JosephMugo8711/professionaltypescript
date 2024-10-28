class Ball {
    kick(distance) {
        console.log(`Kicking the ball ${distance} meters.`);
    }
}
let kickable = new Ball();
kickable.kick(10);
