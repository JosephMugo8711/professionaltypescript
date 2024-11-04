type Employee = {
    id: number;
    name: string;
    salary: number;
    departmentId: number;
};
type Department = {
    id: number;
    name: string;
};
declare const employees: Employee[];
declare const departments: Department[];
declare function getHighestPaidEmployees(employees: Employee[], departments: Department[]): {
    Department: string;
    Employee: string;
    Salary: number;
}[];
declare const highestPaidEmployees: {
    Department: string;
    Employee: string;
    Salary: number;
}[];
