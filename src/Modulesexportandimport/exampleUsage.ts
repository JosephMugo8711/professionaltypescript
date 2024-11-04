import { hello, helloEs } from "./helloWorldModule";  // load specified elements
import defaultHello from "./helloWorldModule" // load default export into name defaultHello
import * as Bundle from "./helloWorldModule"  // load all exports as Bundle
import {welcome} from "./welcome" 

hello("TypeScript");  // calls hello function from helloWorldModule
helloEs("TypeScript");  // calls helloEs function from helloWorldModule
welcome("TypeScript");  // calls welcome function from welcome.ts

Bundle.hello("TypeScript"); //
Bundle.helloEs("TypeScript"); //

welcome("TypeScript"); // calls welcome function from