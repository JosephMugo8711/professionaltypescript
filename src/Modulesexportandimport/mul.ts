import Operator from "./reexport";
export class Mul implements Operator {
    eval(a: number, b: number): number {
        return a * b;
    }
}