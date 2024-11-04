class Task2 {
    run() {
        console.log(`Executing task for type: ${this.getTypeName()}`);
    }
    getTypeName() {
        return "Unknown type";
    }
}
const stringTask2 = new Task2();
function runSafe2(task) {
    try {
        task.run();
    }
    catch (e) {
        console.error('An error occurred while executing:', e);
    }
}
runSafe2(stringTask2);
runSafe2(stringTask2);
