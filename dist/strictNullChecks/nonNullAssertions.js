function addNext(node) {
    if (node.next === undefined) {
        node.next = { data: 0 };
    }
}
function setNextValue(node, value) {
    addNext(node);
    node.next.data = value;
}
let firstNode = { data: 5 };
setNextValue(firstNode, 10);
console.log(firstNode.next.data);
