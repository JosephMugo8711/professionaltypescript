let myFavoriteNinjaActivity = 0;
console.log(myFavoriteNinjaActivity);
console.log(1);
var PirateActivity;
(function (PirateActivity) {
    PirateActivity[PirateActivity["Boarding"] = 0] = "Boarding";
    PirateActivity[PirateActivity["Drinking"] = 1] = "Drinking";
    PirateActivity[PirateActivity["Fencing"] = 2] = "Fencing";
})(PirateActivity || (PirateActivity = {}));
let myFavoritePirateActivity = PirateActivity.Boarding;
console.log(myFavoritePirateActivity);
console.log(PirateActivity["Drinking"]);
console.log(PirateActivity[myFavoritePirateActivity]);
