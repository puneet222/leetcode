/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let ptr = new ListNode();
    let p = ptr;
    let p1 = l1, p2 = l2;
    while (p1 && p2) {
        if (p1.val < p2.val) {
            ptr.next = p1
            p1 = p1.next;
        } else {
            ptr.next = p2;
            p2 = p2.next;
        }
        ptr = ptr.next;
    }
    if (p1) {
        ptr.next = p1;
    }
    if (p2) {
        ptr.next = p2;
    }
    return p.next;
};