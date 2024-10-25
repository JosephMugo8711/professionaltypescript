class SomeClass {
    public static SomeStaticValue: string = "hello";
    public someMemberValue: number = 15;
    private somePrivateValue: boolean = false;

    constructor () {
        SomeClass.SomeStaticValue = SomeClass.getGoodbye();
        this.someMemberValue = this.getFortyTwo();
        this.somePrivateValue = this.getTrue();
}
    public static getGoodbye(): string {
       return "goodbye!";
}
    public getFortyTwo(): number {
       return 42;
}
    private getTrue(): boolean {
      return true;
}
}


//JavaScript source
// When transpiled using TypeScript v2.2.2, the output is like so:


// var SomeClass = (function () {
//     function SomeClass() {
//         this.someMemberValue = 15;
//         this.somePrivateValue = false;
//         SomeClass.SomeStaticValue = SomeClass.getGoodbye();
//         this.someMemberValue = this.getFortyTwo();
//         this.somePrivateValue = this.getTrue();
// }
//     SomeClass.getGoodbye = function () {
//         return "goodbye!";
// };
//     SomeClass.prototype.getFortyTwo = function () {
//         return 42;
// };
//     SomeClass.prototype.getTrue = function () {
//         return true;
// };
//        return SomeClass;
// }());
// SomeClass.SomeStaticValue = "hello";


// Observations
//The modiﬁcation of the class' prototype is wrapped inside an IIFE.
//Member variables are deﬁned inside the main class function.
//Static properties are added directly to the class object, whereas instance properties are added to the
//prototype.