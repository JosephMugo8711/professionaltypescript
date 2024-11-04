class TaskRunner {
    runSafe(runnable) {
        try {
            runnable.run();
        }
        catch (e) {
            console.error('An error occurred while running:', e);
        }
    }
}
function runSafe(runnable) {
    try {
        runnable.run();
    }
    catch (e) {
        console.error('An error occurred while running:', e);
    }
}
class Task {
    run() {
        console.log("Task is running");
    }
}
const task = new Task();
const taskRunner = new TaskRunner();
taskRunner.runSafe(task);
runSafe(task);
