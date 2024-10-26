let myFavoritePet;
myFavoritePet = "dog";
function buyPet(pet, name) {
    if (pet === "cat") {
        return {
            species: "cat",
            name: name,
            eat() {
                console.log(`${this.name} eats.`);
            },
            walk() {
                console.log(`${this.name} walks.`);
            },
            sleep() {
                console.log(`${this.name} sleeps.`);
            }
        };
    }
    else if (pet === "dog") {
        return {
            species: "dog",
            name: name,
            eat() {
                console.log(`${this.name} eats.`);
            },
            walk() {
                console.log(`${this.name} walks.`);
            },
            sleep() {
                console.log(`${this.name} sleeps.`);
            }
        };
    }
    else if (pet === "bird") {
        return {
            species: "bird",
            name: name,
            eat() {
                console.log(`${this.name} eats.`);
            },
            walk() {
                console.log(`${this.name} walks.`);
            },
            sleep() {
                console.log(`${this.name} sleeps.`);
            },
            sing() {
                console.log(`${this.name} sings.`);
            }
        };
    }
    else {
        throw new Error(`Sorry, we do not have a ${pet}. Would you like to buy a dog instead?`);
    }
}
function petIsCat(pet) {
    return pet.species === "cat";
}
function petIsDog(pet) {
    return pet.species === "dog";
}
function petIsBird(pet) {
    return pet.species === "bird";
}
function playWithPet(pet) {
    console.log(`Hey ${pet.name}, let's play.`);
    if (petIsCat(pet)) {
        pet.eat();
        pet.sleep();
    }
    else if (petIsDog(pet)) {
        pet.eat();
        pet.walk();
        pet.sleep();
    }
    else if (petIsBird(pet)) {
        pet.eat();
        pet.sing();
        pet.sleep();
    }
    else {
        throw new Error("An unknown pet. Did you buy a rock?");
    }
}
let dog = buyPet(myFavoritePet, "Rocky");
playWithPet(dog);
