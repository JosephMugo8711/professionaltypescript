interface IStatus<U> {
    code: U;
}
interface IEvents<T> {
    list: T[];
    emit(event: T): void;
    getAll(): T[];
}
declare class State<T> implements IEvents<T> {
    list: T[];
    constructor();
    emit(event: T): void;
    getAll(): T[];
}
declare const s: State<IStatus<number>>;
type Code = {
    message: string;
    status: number;
};
declare const s2: State<IStatus<Code>>;
