// When re-exporting bundle, declarations may be overridden when declared explicitly.

export * from "./calculator"
import Operator from "./calculator";
export class Add implements Operator {
    eval(a: number, b: number): number {
    return 42;
    }
}