interface Knife {
    cut(): any;
}
interface BottleOpener {
    openBottle(): any;
}
interface Screwdriver {
    turnScrew(): any;
}
type SwissArmyKnife = Knife & BottleOpener & Screwdriver;
declare const swissArmyKnife: SwissArmyKnife;
declare function use(tool: SwissArmyKnife): void;
