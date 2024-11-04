// Any declaration (variable, const, function, class, etc.) can be exported from module to be imported in other module.
// TypeScript oﬀer two export types: named and default.

export function hello(name: string){
    console.log(`Hello ${name}!`);
}
export const answerToLifeTheUniverseAndEverything = 42;
export const unused = 0;