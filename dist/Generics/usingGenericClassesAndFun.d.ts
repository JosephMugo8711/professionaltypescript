declare class Task2<T> {
    run(): void;
    private getTypeName;
}
declare const stringTask2: Task2<string>;
declare function runSafe2<T extends Task2<U>, U>(task: T): void;
