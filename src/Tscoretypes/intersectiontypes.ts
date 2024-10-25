// interface representing a knife that can cut 

interface Knife {
    cut(); // method to cut something
}

// interface representing a bottleopener that can open bottles
interface BottleOpener{
    openBottle(); // method to open bottles
}
// Interface representing a Screwdriver that can turn screws
interface Screwdriver{
    turnScrew(); // Method to turn a screw
}
// intersection type that combines knife, bottleopener and Screw driver
// A swissArmyKnife must have all three methods: cut(), openBottle(), turnScrew()
type SwissArmyKnife = Knife & BottleOpener & Screwdriver;

// Creating a new SwissArmyKnife object
const swissArmyKnife: SwissArmyKnife = {
    cut: () => console.log("I'm cutting something"),
    openBottle: () => console.log("I'm opening a bottle"),
    turnScrew: () => console.log("I'm turning a screw")
};
// Function that takes a SwissArmyKnife as a tool and uses all its methods
function use(tool: SwissArmyKnife): void {
    console.log("I can do anything!"); // Message indicating the tool has multiple functionalities
    tool.cut(); // Calls the cut method from the Knife interface
    tool.openBottle(); // Calls the openBottle method from the BottleOpener interface
    tool.turnScrew(); // Calls the turnScrew method from the Screwdriver interface
}