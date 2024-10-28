// The non-null assertion operator (`!`) allows you to assert that a value is neither `null` nor `undefined`,
// even when the TypeScript compiler cannot automatically infer this.
// This is useful in scenarios where you, as the developer, know that the value is definitely not `null`,
// but TypeScript's static analysis cannot confirm it.

// Let's define a type 'ListNode', which represents a node in a linked list.
// Each ListNode has a 'data' property and an optional 'next' property,
// meaning that 'next' could be either another ListNode or undefined.

type ListNode = { data: number; next?: ListNode; }; // 'next?' indicates that the 'next' property is optional.

// Function: 'addNext' ensures that a ListNode has a 'next' node.
// If 'node.next' is undefined, it assigns a new node with default data.
function addNext(node: ListNode) {
    if (node.next === undefined) {
        // If 'next' is undefined, create a new ListNode with default data of 0.
        node.next = { data: 0 };
    }
}

// Function: 'setNextValue' sets the 'data' value of the 'next' node in a ListNode.
// This function first ensures that the current node has a 'next' node by calling 'addNext',
// and then it assigns a value to the 'data' property of the 'next' node.
function setNextValue(node: ListNode, value: number) {
    // Call 'addNext' to ensure that 'node.next' is not undefined.
    addNext(node);

    // Even though we just called 'addNext', TypeScript still doesn't "know" for sure that 'node.next' is defined.
    // The TypeScript compiler isn't able to infer that 'node.next' exists on the next line.
    // So, it would give a compile-time error if we tried to access 'node.next.data' directly here:
    // node.next.data = value;  // TypeScript would raise an error: Object is possibly 'undefined'.

    // To inform TypeScript that we are certain 'node.next' is defined (since we called 'addNext' to set it),
    // we can use the non-null assertion operator (`!`).
    // The `!` tells TypeScript: "Trust me, 'node.next' is not undefined."
    
    node.next!.data = value; // The non-null assertion here guarantees that 'node.next' is not undefined.
}

// Usage Example:

// Create a new ListNode with initial data value of 5 and no 'next' node.
let firstNode: ListNode = { data: 5 };

// Now we want to set the data value of the 'next' node of 'firstNode'.
setNextValue(firstNode, 10);

// After calling 'setNextValue', the 'next' node of 'firstNode' is defined, and its data is set to 10.
console.log(firstNode.next!.data); // Output: 10
