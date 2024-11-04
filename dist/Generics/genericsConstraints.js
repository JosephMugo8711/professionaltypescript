class StringTask {
    run(parameter) {
        return parameter.length;
    }
}
const stringRunner = {
    runSafe: (runnable, parameter) => runnable.run(parameter),
};
console.log(stringRunner.runSafe(new StringTask(), "Hello, world!"));
class SimpleTask {
    run() {
        console.log('SimpleTask is running');
    }
}
const simpleRunner = {
    runSafe: (runnable) => runnable.run(),
};
simpleRunner.runSafe(new SimpleTask());
class NumberToStringTask {
    run(parameter) {
        return `The number is ${parameter}`;
    }
}
const numberRunner = {
    runSafe: (runnable, parameter) => runnable.run(parameter),
};
console.log(numberRunner.runSafe(new NumberToStringTask(), 42));
