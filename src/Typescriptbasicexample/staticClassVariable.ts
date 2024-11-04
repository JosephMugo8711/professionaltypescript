// Static class variable example - count how many time method is being invoked


// here countInstance is a static variable

class StaticTest {
    static countInstance: number = 0;
    constructor() {
        StaticTest.countInstance++;  // increment the count each time a new instance is created
    }
}

new StaticTest();
new StaticTest();
console.log(StaticTest.countInstance);  // Output: 2