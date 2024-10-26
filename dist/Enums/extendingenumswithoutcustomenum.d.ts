declare enum SourceEnum {
    value1,
    value2
}
declare enum AdditionToSourceEnum {
    value3,
    value4
}
type TestEnumType = SourceEnum | AdditionToSourceEnum;
declare let TestEnum: typeof SourceEnum & typeof AdditionToSourceEnum;
declare function check2(test: TestEnumType): test is SourceEnum.value2;
