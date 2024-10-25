// Base class Enum that holds a string value
class Enum {
    // Constructor takes a string value that will be stored as the Enum value
    constructor(protected value: string) {}

    // Method to return the Enum value as a string
    public toString() {
        return String(this.value);
    }

    // Method to check if the current Enum value matches a given value (Enum or string)
    public is(value: Enum | string) {
        // Compare the string value of the current Enum with the input value
        return this.value === value.toString();
    }
}

// Derived class SourceEnum2, which extends Enum and creates specific enum instances
class SourceEnum2 extends Enum {
    // Defining static instances of SourceEnum2
    public static value1 = new SourceEnum2('value1');
    public static value2 = new SourceEnum2('value2');
}

// Another derived class TestEnum2, extending SourceEnum2 and adding more specific enum instances
class TestEnum2 extends SourceEnum2 {
    // Defining static instances of TestEnum2
    public static value3 = new TestEnum2('value3');
    public static value4 = new TestEnum2('value4');
}

// Function to check if the passed TestEnum2 is the same as TestEnum2.value2
function check(test: TestEnum2) {
    // Returns true if test is the exact instance of TestEnum2.value2
    return test === TestEnum2.value2;
}

// Test cases to show how the enum instances work
let value1 = TestEnum2.value1;

// The `+ 'hello'` calls the `toString()` method of value1, printing 'value1hello'
console.log(value1 + 'hello'); // Output: 'value1hello'

// Cast value1 to Enum to access the `is()` method
console.log((value1 as Enum).toString() === 'value1'); // Output: true

// Check if value1 is the string 'value1' using the `is()` method
console.log((value1 as Enum).is(SourceEnum2.value1)); // Output: true

// Check if value3 is the same as itself using the `is()` method
console.log(!(TestEnum2.value3 as Enum).is(TestEnum2.value3)); // Output: false (since `is()` returns true, the negation `!` makes it false)

// Check if value1 is equal to SourceEnum2.value1 using the `is()` method
console.log((value1 as Enum).is(SourceEnum2.value1)); // Output: true

// Runs the check function with TestEnum2.value2 to see if it's TestEnum2.value2
console.log(check(TestEnum2.value2)); // Output: true

// This works, but TSLint might complain due to the usage of '==' instead of '==='
// This checks if the string 'value1' loosely equals the value of TestEnum2.value1
console.log(TestEnum2.value1 == <any>'value1'); // Output: true

// The '===' operator won't work for comparison between enum instances and strings directly,
// that's why `.is()` method is recommended for strict comparison.
