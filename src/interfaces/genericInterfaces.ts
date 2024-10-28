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
//s.emit({ code: '500' }); // type error

s.getAll().forEach(event => console.log(event.code))

// Here our state class is typed as IStatus<number>

type Code = {
    message: string;
    status: number;
}

const s2 = new State<IStatus<Code>>();


// we are able to emit code as the type Code
s2.emit({ code: { message: 'OK', status: 200}});

s2.getAll().map(event => event.code).forEach(event => {
    console.log(event.status);
    console.log(event.message);
})

// Our State class is typed as IStatus<Code>. In this way, we are able to pass more complex type to our emit method
// As you can see, generic interfaces can be a very useful tool for statically typed code 




