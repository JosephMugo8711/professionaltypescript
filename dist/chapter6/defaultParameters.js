function buildName3(firstName, lastName = "Smith") {
    return `${firstName} ${lastName}`;
}
console.log(buildName3("Bob"));
console.log(buildName3("foo", "bar"));
console.log(buildName3("foo", undefined));
