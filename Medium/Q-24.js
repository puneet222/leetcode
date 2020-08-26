/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (!head || !head.next) {
        return head;
    }
    let remain = swapPairs(head.next.next);
    let ptr = head.next;
    ptr.next = head;
    head.next = remain;
    return ptr;
};