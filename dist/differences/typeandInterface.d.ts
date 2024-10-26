interface Myinterface {
    name: string;
}
interface MyInterface {
    age: number;
}
type myType = {
    name: string;
};
type ExtendedType = MyType & {
    age: number;
};
interface ExtendedInterface extends MyInterface {
    age: number;
}
type UnionType = string | number;
type IntersectionType = MyType & {
    age: number;
};
type myTypes = {
    name: string;
};
type AnotherType = {
    age: number;
};
type UnionTypes = myTypes | AnotherType;
type IntersectionTypes = myTypes & AnotherType;
