const persons = [
    { id: 1, email: "john@example.com" },
    { id: 2, email: "bob@example.com" },
    { id: 3, email: "john@example.com" },
];
function removeDuplicateEmails(persons) {
    const emailMap = new Map();
    for (const person of persons) {
        if (!emailMap.has(person.email) || emailMap.get(person.email).id > person.id) {
            emailMap.set(person.email, person);
        }
    }
    return Array.from(emailMap.values());
}
const uniquePersons = removeDuplicateEmails(persons);
console.log(uniquePersons);
