interface IPerson {
    name: string;
    age: number;

    breath(): void
}

// create more specific interface that has the same properties of the person
// We can do it using the extends keywords
interface IManager extends IPerson {
    managerId: number;

    managePeople(people: IPerson[]): void;
}

// in addition it is possible to extend multiple interfaces