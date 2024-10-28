// One of the core benefits of Typescript is that it enforces data types of values that you are passing around your code to help prevent mistakes
// Example
// Making a pet dating application


// I have this simple function that checks if two pets are compatible with each other

interface Pets {
    species1: string;
    age: number;
}
// specify the type of our parameters as our new interface
// Typescript will make sure that the parameters passed to our function contain the properties specified in the Pet interface
function checkCompatible(petOne: Pets, petTwo: Pets) {
    if (petOne.species1 === petTwo.species1 && Math.abs(petOne.age - petTwo.age) <= 5) {
      return true;
    }
};

const petOne1: Pets = { species1: 'dog', age: 3 };
const petTwo1: Pets = { species1: 'dog', age: 6 };

console.log(checkCompatible(petOne1, petTwo1)); // Output: true