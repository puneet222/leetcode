/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function (head, G) {
    let start = false;
    let count = 0;
    let set = new Set(G);
    let ptr = head;
    while (ptr) {
        if (set.has(ptr.val)) {
            start = true;
        } else {
            if (start) {
                start = false;
                count++;
            }
        }
        ptr = ptr.next;
    }
    return start ? count + 1 : count;
};