// TypeScript: A const Enum can be defined like a normal Enum
const enum NinjaActivity {
    Espionage,  // Defaults to 0
    Sabotage,   // Defaults to 1
    Assassination // Defaults to 2
}

// TypeScript: But in JavaScript, nothing is generated for const enums unless they are used.
// JavaScript: Only the number value of the enum is emitted when used.
let myFavoriteNinjaActivity = NinjaActivity.Espionage;
console.log(myFavoriteNinjaActivity); // Output: 0

// JavaScript output:
// var myFavoriteNinjaActivity = 0 /* Espionage */;
// console.log(myFavoriteNinjaActivity); // Output: 0

// TypeScript: You can also access const enums using their string index.
console.log(NinjaActivity["Sabotage"]); // Output: 1

// JavaScript output:
// console.log(1 /* "Sabotage" */); // Output: 1

// TypeScript: A const enum can't be accessed dynamically (e.g., through a variable).
// This will result in an error because runtime access to const enums is not allowed.
// Error: A const enum member can only be accessed using a string literal or a numeric index.
// console.log(NinjaActivity[myFavoriteNinjaActivity]);

// Now, let's define a regular Enum in TypeScript
enum PirateActivity {
    Boarding,  // Defaults to 0
    Drinking,  // Defaults to 1
    Fencing    // Defaults to 2
}

// TypeScript: You can assign a value from the enum
let myFavoritePirateActivity = PirateActivity.Boarding;
console.log(myFavoritePirateActivity); // Output: 0

// JavaScript output:
// var PirateActivity;
// (function (PirateActivity) {
//   PirateActivity[PirateActivity["Boarding"] = 0] = "Boarding";
//   PirateActivity[PirateActivity["Drinking"] = 1] = "Drinking";
//   PirateActivity[PirateActivity["Fencing"] = 2] = "Fencing";
// })(PirateActivity || (PirateActivity = {}));
// var myFavoritePirateActivity = PirateActivity.Boarding;
// console.log(myFavoritePirateActivity); // Output: 0

// TypeScript: Access enum values using string index
console.log(PirateActivity["Drinking"]); // Output: 1

// JavaScript output:
// console.log(PirateActivity["Drinking"]); // Output: 1

// TypeScript: At runtime, you can access a normal enum both by its numeric value and its name.
console.log(PirateActivity[myFavoritePirateActivity]); // Output: "Boarding"

// JavaScript output:
// console.log(PirateActivity[myFavoritePirateActivity]); // Output: "Boarding"
