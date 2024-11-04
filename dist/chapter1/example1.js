const employees = [
    { id: 1, name: "Joe", salary: 70000, departmentId: 1 },
    { id: 2, name: "Jim", salary: 90000, departmentId: 1 },
    { id: 3, name: "Henry", salary: 80000, departmentId: 2 },
    { id: 4, name: "Sam", salary: 60000, departmentId: 2 },
    { id: 5, name: "Max", salary: 90000, departmentId: 1 }
];
const departments = [
    { id: 1, name: "IT" },
    { id: 2, name: "Sales" }
];
function getHighestPaidEmployees(employees, departments) {
    const highestSalariesByDept = new Map();
    employees.forEach(employee => {
        const deptId = employee.departmentId;
        if (!highestSalariesByDept.has(deptId)) {
            highestSalariesByDept.set(deptId, [employee]);
        }
        else {
            const currentEmployees = highestSalariesByDept.get(deptId);
            const maxSalary = currentEmployees[0].salary;
            if (employee.salary > maxSalary) {
                highestSalariesByDept.set(deptId, [employee]);
            }
            else if (employee.salary === maxSalary) {
                currentEmployees.push(employee);
            }
        }
    });
    const result = [];
    highestSalariesByDept.forEach((employees, deptId) => {
        const departmentName = departments.find(dept => dept.id === deptId).name;
        employees.forEach(employee => {
            result.push({
                Department: departmentName,
                Employee: employee.name,
                Salary: employee.salary
            });
        });
    });
    return result;
}
const highestPaidEmployees = getHighestPaidEmployees(employees, departments);
console.log("+------------+----------+--------+");
console.log("| Department | Employee | Salary |");
console.log("+------------+----------+--------+");
highestPaidEmployees.forEach(row => {
    console.log(`| ${row.Department.padEnd(10)} | ${row.Employee.padEnd(8)} | ${row.Salary.toString().padEnd(6)} |`);
});
console.log("+------------+----------+--------+");
