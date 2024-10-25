// Declare a constant type literal for `myFavoritePet`, which can only hold the value "dog".
let myFavoritePet: "dog"; // myFavoritePet can only have the value "dog".
myFavoritePet = "dog"; // This assignment is valid because the value matches the literal type.

// The following would produce a TypeScript error because "rock" is not assignable to the literal type "dog".
// myFavoritePet = "rock"; // Error: Type '"rock"' is not assignable to type '"dog"'.

// Using type aliases and union types to allow for more flexibility while maintaining type safety.
type Species = "cat" | "dog" | "bird"; // Defines the allowed pet species.

// Define the general interface for a Pet, which includes common properties and methods shared by all pets.
interface Pet {
    species: Species; // Each pet must have a species from the defined union.
    name: string; // Name of the pet.
    eat(): void; // A method to indicate the pet is eating.
    walk(): void; // A method to indicate the pet is walking.
    sleep(): void; // A method to indicate the pet is sleeping.
}

// Define more specific interfaces for each pet type.
// A Cat extends the general Pet interface and has the species "cat".
interface Cat extends Pet {
    species: "cat";
}

// A Dog extends the general Pet interface and has the species "dog".
interface Dog extends Pet {
    species: "dog";
}

// A Bird extends the general Pet interface and has the species "bird", with an additional behavior: `sing()`.
interface Bird extends Pet {
    species: "bird";
    sing(): void; // Birds have the unique ability to sing.
}

// This commented-out code would throw an error because a "rock" is not a valid pet species.
// TypeScript enforces that only "cat", "dog", or "bird" can extend the Pet interface.
// interface Rock extends Pet {
//     species: "rock"; // Error: Type '"rock"' is not assignable to type '"cat" | "dog" | "bird"'.
// }

// Overload signatures for the `buyPet` function to ensure specific return types based on the input species.
function buyPet(pet: "cat", name: string): Cat;
function buyPet(pet: "dog", name: string): Dog;
function buyPet(pet: "bird", name: string): Bird;
function buyPet(pet: Species, name: string): Pet; // General function signature for any pet type.

/**
 * Factory function to create a pet object based on the species provided.
 *
 * @param pet - The species of the pet ("cat", "dog", or "bird").
 * @param name - The name to assign to the pet.
 * @returns An object representing the pet with its specific behaviors.
 * @throws Will throw an error if the species is not recognized.
 */
function buyPet(pet: Species, name: string): Pet {
    // Handling the case when the pet is a "cat".
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
        } as Cat; // Return as a Cat.
    }

    // Handling the case when the pet is a "dog".
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
        } as Dog; // Return as a Dog.
    }

    // Handling the case when the pet is a "bird".
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
        } as Bird; // Return as a Bird.
    }

    // If an invalid species is provided, throw an error.
    else {
        throw new Error(`Sorry, we do not have a ${pet}. Would you like to buy a dog instead?`);
    }
}

// Type guards to check if a pet is of a specific species.
function petIsCat(pet: Pet): pet is Cat {
    return pet.species === "cat"; // Narrow the type to Cat.
}

function petIsDog(pet: Pet): pet is Dog {
    return pet.species === "dog"; // Narrow the type to Dog.
}

function petIsBird(pet: Pet): pet is Bird {
    return pet.species === "bird"; // Narrow the type to Bird.
}

/**
 * Function to interact with the pet and call species-specific behaviors.
 *
 * @param pet - The pet object.
 */
function playWithPet(pet: Pet) {
    console.log(`Hey ${pet.name}, let's play.`);
    
    // If the pet is a cat, call cat-specific methods.
    if (petIsCat(pet)) {
        pet.eat();
        pet.sleep();
        // The following would produce a type error because cats cannot sing.
        // pet.sing(); // Error: Property 'sing' does not exist on type 'Cat'.
    }

    // If the pet is a dog, call dog-specific methods.
    else if (petIsDog(pet)) {
        pet.eat();
        pet.walk();
        pet.sleep();
    }

    // If the pet is a bird, call bird-specific methods.
    else if (petIsBird(pet)) {
        pet.eat();
        pet.sing();
        pet.sleep();
    }

    // Handle an unknown pet (fallback case).
    else {
        throw new Error("An unknown pet. Did you buy a rock?");
    }
}

// Create a Dog object using the buyPet function.
let dog = buyPet(myFavoritePet /* "dog" as defined above */, "Rocky"); // Creates a Dog with name "Rocky".

// Example usage of the playWithPet function.
playWithPet(dog); 
// Output:
// Hey Rocky, let's play.
// Rocky eats.
// Rocky walks.
// Rocky sleeps.

// The following would produce a TypeScript error because "rock" is not a valid species.
// buyPet("rock", "Rocky"); // Error: Argument of type '"rock"' is not assignable to parameter of type 'Species'.
