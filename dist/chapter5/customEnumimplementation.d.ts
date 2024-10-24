declare class Enum {
    protected value: string;
    constructor(value: string);
    toString(): string;
    is(value: Enum | string): boolean;
}
declare class SourceEnum2 extends Enum {
    static value1: SourceEnum2;
    static value2: SourceEnum2;
}
declare class TestEnum2 extends SourceEnum2 {
    static value3: TestEnum2;
    static value4: TestEnum2;
}
declare function check(test: TestEnum2): boolean;
declare let value1: SourceEnum2;
