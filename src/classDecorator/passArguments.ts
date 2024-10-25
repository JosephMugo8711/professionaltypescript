// Passing arguments to a class decorator

// We can wrap a class decorator with another function to allow customization
function withArgs(arg1: string, arg2: number) {
    return function (target: any) {
        // We can modify the target class here
        console.log(`Decorator with arguments: ${arg1}, ${arg2}`);
    };
}

function addMetadata1(metadata: any){
    return function log(target: any){
        // Add metadata
        target.__customMetadata = metadata;

        // Return target
        return target;
    }

}

// The addMetadata1 takes some arguments used as configuration and then returns an unnamed function which is the actual decorator
// In the decorator we can access the arguments because because there is a closure in place

@addMetadata1({ guid: "417c6ec7-ec05-4954-a3c6-73a0d7f9f5bf"})
class Person1 {
    private _name: string;
    public constructor(name: string){
        this._name = name;
    }
    public greet() {
        return this._name;
    }
}

// We can use the following function to access the genrated metadata;

function getMetadataFromClass1(target: any){
    return target.__customMetadata;
}

console.log(getMetadataFromClass1(Person1)); // Outputs: { guid: "417c6ec7-ec05-4954-a3c6-73a0d7f9f5bf" }

// if everything went right the console should display:

{guid: "417c6ec7-ec05-4954-a3c6-73a0d7f9f5bf"}