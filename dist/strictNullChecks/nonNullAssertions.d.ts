type ListNode = {
    data: number;
    next?: ListNode;
};
declare function addNext(node: ListNode): void;
declare function setNextValue(node: ListNode, value: number): void;
declare let firstNode: ListNode;
