var SomeEnum;
(function (SomeEnum) {
    SomeEnum[SomeEnum["A"] = 0] = "A";
    SomeEnum[SomeEnum["B"] = 1] = "B";
})(SomeEnum || (SomeEnum = {}));
let enumValues = [];
for (let value in SomeEnum) {
    if (typeof SomeEnum[value] === 'number') {
        enumValues.push(value);
    }
}
enumValues.forEach(v => console.log(v));
