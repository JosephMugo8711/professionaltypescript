// The goal is to extract all the string values (the keys)
// from a Typescript enum 

enum SomeEnum { A, B } // defined a simple enum called SomeEnum with two members: A and B
// By default enums have both numeric values and sting keys
// SomeEnum.A has the value 0.
// SomeEnum.B has the value 1.
// Enums in Typescript automatically create a two-way mapping
// SomeEnum[0] returns "A".
// SomeEnum[1] returns "B".
// SomeEnum["A"] returns 0.
// SomeEnum["B"] returns 1.

// extracting enum keys
// THis initializes an empty arrayenumvalues where we will store the enum keys ("A", "B")
let enumValues:Array<string>= [];

// This loops goes over all the members of SomeEnum
// Since ts enums are two-way maps
// the for...in loop will iterate over both the numeric and strig parts of the enum
// loop will encounter
// SomeEnum["A"] (which is 0)
// SomeEnum["B"] (which is 1)
// SomeEnum[0] (which is "A")
// SomeEnum[1] (which is "B")
for(let value in SomeEnum) {
    // filtering out only the string keys by ensuring that the the value associated with the key is a number
    // (as only numbers can be keys in enums)
    // and then pushing the key to the enumValues array
    // THis excludes the numeric-to-string mappings, leaving only the string-to-number mappings (the original enum keys "A" AND "B")
    if(typeof SomeEnum[value] === 'number') {
        // pushing enum keys to the Array
        // When the condition is met, the key (value) is pushed into the enumValues array. This ensures only the string keys ("A" and "B") are added.
    enumValues.push(value);
}
}

// Printing the enum keys to the console
// Finally, the forEach loop iterates over the enumValues array and prints each enum key ("A" and "B").
enumValues.forEach(v=> console.log(v))
//A
//B

// pseudo 
// The code loops over all properties of the SomeEnum.
// It filters out only the string keys by checking if their values are numbers (since the string keys map to numbers in enums).
// The keys are stored in the enumValues array and printed one by one.

// SomeEnum["A"] returns 0.
// SomeEnum["B"] returns 1. But SomeEnum[0] and SomeEnum[1] are ignored, leaving just "A" and "B" in the enumValues array.