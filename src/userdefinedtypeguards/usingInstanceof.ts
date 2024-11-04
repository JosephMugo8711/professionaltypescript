// Instanceof  equires that the variable is of type any

class Pet {}
class Dog extends Pet {
    bark() {
        console.log('Woof!');
    }
}

class Cat extends Pet {
    purr() {
        console.log('Meow!');
    }
}

function example2(foo: any){
    if (foo instanceof Dog) {
        foo.bark();  // Calls the bark method of Dog
    } else if (foo instanceof Cat) {
        foo.purr();  // Calls the purr method of Cat
    } else {
        console.log('I don\'t know what this is!');
    }
}

example2(new Dog());
example2(new Cat());

