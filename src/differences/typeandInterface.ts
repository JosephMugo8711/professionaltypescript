// Both type and interface are used to define the shapes of objects
// key differnces

// 1. interfaces can be extended (i.e merged) with additional properties or extended from multiple interfaces

interface Myinterface {
    name: string;
}

interface MyInterface {
    age: number;
}

// 2. Cannot be merged. ONce a type is defined, it cannot be extended or reopened in the same way interfaces can

type myType = {
    name: string;
}

// This will throw an error
//type myType = {age: number}

// However both types can extend or  be extended

// extending a type
type ExtendedType = MyType & {age: number};


// extending an interface
interface ExtendedInterface extends MyInterface {
    age: number;
}


// 3. Union and Intersection Types
// Type: Can define unions and intersections, which means it can combine types or create more complex type compositions

type UnionType = string | number;

type IntersectionType = MyType & {age: number};

type myTypes = {name: string};
type AnotherType = {age: number};

// Union type
type UnionTypes = myTypes | AnotherType;

// Intersection type
type IntersectionTypes = myTypes & AnotherType; // has both name and age

// Interface cannot define unions or intersections directly. You would have to use type for that


