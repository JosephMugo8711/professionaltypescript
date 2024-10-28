function checkCompatible(petOne, petTwo) {
    if (petOne.species1 === petTwo.species1 && Math.abs(petOne.age - petTwo.age) <= 5) {
        return true;
    }
}
;
const petOne1 = { species1: 'dog', age: 3 };
const petTwo1 = { species1: 'dog', age: 6 };
console.log(checkCompatible(petOne1, petTwo1));
