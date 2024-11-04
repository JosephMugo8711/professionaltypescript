export function hello(name: string) {
    console.log(`Hello, ${name}!`);
}

function helloEs(name: string) {
    console.log(`Hello, ${name}!`);
}

export  {helloEs};
export default helloEs;