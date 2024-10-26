// Like classes, interfaces can receive polymorphic parameters (aka Generics) too
// Declaring Generic Paramters on Interfaces
interface IStatus<U> {

    code: U;
}


interface IEvents<T> {
    list: T[];
    emit(event: T): void;
    getAll(): T[];
}


// Here, you can see that our two interfaces take some generic parameters, T and U

// Implementing Generic Interfaces
// We will create a simple class in order to implements the interface IEvents

class  State<T> implements IEvents<T> {
    list: T[];

    constructor(){
        this.list = [];
    }

    emit(event: T): void {
        this.list.push(event)
    }
    getAll(): T[] {
        return this.list;
    }
}

// Lets create some instances of our State class
// In my Example, the State class will handle a generic status by using IStatus<T>
// In this way, the interface IEvent<T> will also handle a IStatus<T>
const s = new State<IStatus<number>>();

// The 'code' property is expected to be a number, so:

s.emit({ code: 200}); // works
s.emit({ code: 404}); // works

s.getAll().forEach(event => console.log(event.code))


