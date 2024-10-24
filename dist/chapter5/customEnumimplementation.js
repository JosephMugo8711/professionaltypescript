class Enum {
    constructor(value) {
        this.value = value;
    }
    toString() {
        return String(this.value);
    }
    is(value) {
        return this.value === value.toString();
    }
}
class SourceEnum2 extends Enum {
}
SourceEnum2.value1 = new SourceEnum2('value1');
SourceEnum2.value2 = new SourceEnum2('value2');
class TestEnum2 extends SourceEnum2 {
}
TestEnum2.value3 = new TestEnum2('value3');
TestEnum2.value4 = new TestEnum2('value4');
function check(test) {
    return test === TestEnum2.value2;
}
let value1 = TestEnum2.value1;
console.log(value1 + 'hello');
console.log(value1.toString() === 'value1');
console.log(value1.is(SourceEnum2.value1));
console.log(!TestEnum2.value3.is(TestEnum2.value3));
console.log(value1.is(SourceEnum2.value1));
console.log(check(TestEnum2.value2));
console.log(TestEnum2.value1 == 'value1');
