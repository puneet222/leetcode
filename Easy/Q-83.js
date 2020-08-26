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
var deleteDuplicates = function (head) {
    if (head == null) return head;
    let ptr1 = head;
    let ptr2 = head.next;
    while (ptr2) {
        if (ptr1.val !== ptr2.val) {
            ptr1.next = ptr2;
            ptr1 = ptr1.next;
        }
        ptr2 = ptr2.next;
    }
    ptr1.next = ptr2;
    return head;
};