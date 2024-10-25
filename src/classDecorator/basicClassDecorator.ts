// A class decorator is just a function that takes the class as its only argument and returns it after doing something with it:

function log1<T>(target: T){
    // Do something with target
    console.log(target);

    // Return the modified target
    return target;
}

// We can then apply the class decorator to a class
@log1
class Person21 {
    private _name: string;
    public constructor(name: string){
        this._name = name;
    }
    public greet() {
        return this._name;
    }
}