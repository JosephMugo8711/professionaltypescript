const swissArmyKnife = {
    cut: () => console.log("I'm cutting something"),
    openBottle: () => console.log("I'm opening a bottle"),
    turnScrew: () => console.log("I'm turning a screw")
};
function use(tool) {
    console.log("I can do anything!");
    tool.cut();
    tool.openBottle();
    tool.turnScrew();
}
