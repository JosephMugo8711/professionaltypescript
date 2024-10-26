declare let myFavoritePet: "dog";
type Species = "cat" | "dog" | "bird";
interface Pet {
    species: Species;
    name: string;
    eat(): void;
    walk(): void;
    sleep(): void;
}
interface Cat extends Pet {
    species: "cat";
}
interface Dog extends Pet {
    species: "dog";
}
interface Bird extends Pet {
    species: "bird";
    sing(): void;
}
declare function buyPet(pet: "cat", name: string): Cat;
declare function buyPet(pet: "dog", name: string): Dog;
declare function buyPet(pet: "bird", name: string): Bird;
declare function buyPet(pet: Species, name: string): Pet;
declare function petIsCat(pet: Pet): pet is Cat;
declare function petIsDog(pet: Pet): pet is Dog;
declare function petIsBird(pet: Pet): pet is Bird;
declare function playWithPet(pet: Pet): void;
declare let dog: Dog;
