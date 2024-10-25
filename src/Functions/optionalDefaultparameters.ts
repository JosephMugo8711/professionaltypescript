function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return `${firstName} ${lastName}`;
    } else {
        return firstName;
    }
}

console.log(buildName("Bob"));                  // Outputs: "Bob"

// optional parameters must come after all non-optional parameters

//function buildName2(firstName?: string, lastName: string) {}   // Invalid


