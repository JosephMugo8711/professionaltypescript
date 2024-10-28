// Section 10.6: Using Generic Classes and Functions

// Define a generic class 'Task2' that takes a type parameter 'T'.
// This class represents a task that can run an operation based on type 'T'.
class Task2<T> {
    // The run method simulates executing the task associated with type 'T'.
    run(): void {
        console.log(`Executing task for type: ${this.getTypeName()}`); // Use a method to simulate type representation.
    }

    // A method to return the type name as a string.
    private getTypeName(): string {
        return "Unknown type"; // Placeholder, as TypeScript types do not exist at runtime.
    }
}
// Create an instance of the generic class 'Task2' with the type parameter 'string'.
// This instance can be used to run tasks specifically related to string operations.
const stringTask2 = new Task2<string>();  // stringTask2 is now a Task2 for strings.

// Define a generic function 'runSafe' that accepts a task of type T,
// where T extends 'Task2<U>' and U is a type parameter.
// This function aims to execute the run method of the task safely.
function runSafe2<T extends Task2<U>, U>(task: T): void {
    try {
        task.run();  // Attempt to execute the run method.
    } catch (e) {
        // If an error occurs during execution, log the error message.
        console.error('An error occurred while executing:', e);
    }
}

// Specify the generic types explicitly when calling 'runSafe'.
// Here, we specify that 'task' is of type 'Task2<string>' and U is 'string'.
runSafe2<Task2<string>, string>(stringTask2);

// Call 'runSafe' without specifying the types explicitly.
// TypeScript infers the generic types based on the argument provided.
// It understands that 'T' is 'Task2<string>' and 'U' is 'string'.
runSafe2(stringTask2);
