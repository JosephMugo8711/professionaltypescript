import _ = require('lodash');
// The _ variable is of type any, so TypeScript will not perform any type checking.
//const _: any = require('lodash');


//As of TypeScript 2.0, you can also use a shorthand ambient module declaration in order to tell TypeScript that a
//module exists when you don't have a type deﬁnition ﬁle for the module. TypeScript won't be able to provide any
//meaningful typechecking in this case though.

//declare module "lodash";
// you can now import from lodash in any way you wish:
import { flatten } from "lodash";
//import * as _ from "lodash";


//As of TypeScript 2.1, the rules have been relaxed even further. Now, as long as a module exists in your
//node_modules directory, TypeScript will allow you to import it, even with no module declaration anywhere. (Note
//that if using the --noImplicitAny compiler option, the below will still generate a warning.)

// Will work if `node_modules/someModule/index.js` exists, or if
//`node_modules/someModule/package.json` has a valid "main" entry point
//import { foo } from "someModule";