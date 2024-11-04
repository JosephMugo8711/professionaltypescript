class Pet {
}
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
function example2(foo) {
    if (foo instanceof Dog) {
        foo.bark();
    }
    else if (foo instanceof Cat) {
        foo.purr();
    }
    else {
        console.log('I don\'t know what this is!');
    }
}
example2(new Dog());
example2(new Cat());
