// Define a basic interface IRunnableTask with a run() method.
// This interface will be used as a constraint for ensuring that any class or function
// implementing IRunnableTask must define a run() method.
interface IRunnableTask {
    run(): void;  // The run() method doesn't take any parameters and returns nothing (void).
}

// Define the ITaskRunner interface with a generic type parameter T.
// T is constrained to be a type that implements the IRunnableTask interface (i.e., T must have a run() method).
interface ITaskRunner {
    runSafe<T extends IRunnableTask>(runnable: T): void;  // The runSafe method takes a runnable of type T and ensures it can call the run() method safely.
}

// Implementing the ITaskRunner interface in a class:
class TaskRunner implements ITaskRunner {
    // The runSafe method in this class takes a parameter runnable of type T, where T extends IRunnableTask.
    // The method tries to safely execute the run() method from the passed object.
    public runSafe<T extends IRunnableTask>(runnable: T): void {
        try {
            // Attempt to run the run() method of the runnable object.
            runnable.run();
        } catch (e) {
            // If an error occurs during the execution of run(), it is caught here.
            console.error('An error occurred while running:', e);
        }
    }
}

// Example of a simple function that also uses the runSafe pattern:
function runSafe<T extends IRunnableTask>(runnable: T): void {
    try {
        // Try to execute the run() method of the runnable object.
        runnable.run();
    } catch (e) {
        // Catch any errors that occur during execution of the run() method.
        console.error('An error occurred while running:', e);
    }
}

// Example usage:
// Define a class Task that implements the IRunnableTask interface.
// The class must provide the run() method as defined in the interface.
class Task implements IRunnableTask {
    run(): void {
        console.log("Task is running");  // This will be executed when run() is called.
    }
}

// Create an instance of the Task class.
const task = new Task();

// Use the TaskRunner class to safely run the task.
// If the run() method throws an error, it will be caught and logged, but the program won't crash.
const taskRunner = new TaskRunner();
taskRunner.runSafe(task);  // Output: "Task is running"

// Alternatively, use the runSafe function to execute the run() method safely.
runSafe(task);  // Output: "Task is running"
