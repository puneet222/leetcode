/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head) {
        return false;
    }
    let ptr1 = head;
    let ptr2 = head.next;
    let isCycle = true;
    while (ptr1 && ptr2) {
        if (ptr1 === ptr2) {
            break;
        }
        ptr1 = ptr1.next;
        ptr2 = ptr2.next ? ptr2.next.next : ptr2.next;
    }
    if (!ptr1 || !ptr2) {
        isCycle = false;
    }
    return isCycle;
};