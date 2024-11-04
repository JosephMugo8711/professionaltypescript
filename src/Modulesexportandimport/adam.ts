// Bundled import
// TypeScript oﬀers method to import whole module into variable

export function hello(name: string){
    console.log(`Hello ${name}!`);
}
export const answerToLifeTheUniverseAndEverything = 42;
import * as Bundle from "./adams";
Bundle.hello(Bundle.answerToLifeTheUniverseAndEverything.toString());
console.log(Bundle.unused);