/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    while (head && head.val === val) {
        head = head.next;
    }
    let ptr = head;
    while (ptr) {
        if (ptr.next && ptr.next.val === val) {
            ptr.next = ptr.next.next;
        } else {
            ptr = ptr.next;
        }
    }
    return head;
};