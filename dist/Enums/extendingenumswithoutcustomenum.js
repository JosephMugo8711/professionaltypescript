var SourceEnum;
(function (SourceEnum) {
    SourceEnum[SourceEnum["value1"] = 'value1'] = "value1";
    SourceEnum[SourceEnum["value2"] = 'value2'] = "value2";
})(SourceEnum || (SourceEnum = {}));
var AdditionToSourceEnum;
(function (AdditionToSourceEnum) {
    AdditionToSourceEnum[AdditionToSourceEnum["value3"] = 'value3'] = "value3";
    AdditionToSourceEnum[AdditionToSourceEnum["value4"] = 'value4'] = "value4";
})(AdditionToSourceEnum || (AdditionToSourceEnum = {}));
let TestEnum = Object.assign({}, SourceEnum, AdditionToSourceEnum);
function check2(test) {
    return test === TestEnum.value2;
}
console.log(TestEnum.value1);
console.log(TestEnum.value2 === 'value2');
console.log(check2(TestEnum.value2));
console.log(check2(TestEnum.value3));
