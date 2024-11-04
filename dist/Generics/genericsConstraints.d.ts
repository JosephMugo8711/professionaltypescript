interface IRunnable<T, U> {
    run(parameter: T): U;
}
interface IRunner<T extends IRunnable<U, V>, U, V> {
    runSafe(runnable: T, parameter: U): V;
}
declare class StringTask implements IRunnable<string, number> {
    run(parameter: string): number;
}
declare const stringRunner: IRunner<StringTask, string, number>;
declare class SimpleTask implements IRunnable<void, void> {
    run(): void;
}
declare const simpleRunner: IRunner<SimpleTask, void, void>;
declare class NumberToStringTask implements IRunnable<number, string> {
    run(parameter: number): string;
}
declare const numberRunner: IRunner<NumberToStringTask, number, string>;
