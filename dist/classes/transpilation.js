class SomeClass {
    constructor() {
        this.someMemberValue = 15;
        this.somePrivateValue = false;
        SomeClass.SomeStaticValue = SomeClass.getGoodbye();
        this.someMemberValue = this.getFortyTwo();
        this.somePrivateValue = this.getTrue();
    }
    static getGoodbye() {
        return "goodbye!";
    }
    getFortyTwo() {
        return 42;
    }
    getTrue() {
        return true;
    }
}
SomeClass.SomeStaticValue = "hello";
