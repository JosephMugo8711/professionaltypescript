// If you just want to indicate the intent of an import (so you dont want to declare a global ) but don't wish to bother 
// with any explicit definitions, you can import an ambient module

//declare module "jquery";

// You can then import from the ambient module

// some other .ts files
// import {$, jQuery} from "jquery";

// Anything imported from the declared module (like $ and Jquery) above will be of type any
