interface IRunnableTask {
    run(): void;
}
interface ITaskRunner {
    runSafe<T extends IRunnableTask>(runnable: T): void;
}
declare class TaskRunner implements ITaskRunner {
    runSafe<T extends IRunnableTask>(runnable: T): void;
}
declare function runSafe<T extends IRunnableTask>(runnable: T): void;
declare class Task implements IRunnableTask {
    run(): void;
}
declare const task: Task;
declare const taskRunner: TaskRunner;
