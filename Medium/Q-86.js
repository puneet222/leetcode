/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    if (head == null || head.next == null) return head;
    let lt = null, gt = null;
    let lptr = null, gptr = null;
    let ptr = head;
    while (ptr) {
        if (ptr.val < x) {
            if (!lt) {
                lt = ptr;
                lptr = ptr;
            } else {
                lptr.next = ptr;
                lptr = lptr.next;
            }
            ptr = ptr.next;
            lptr.next = null;
        } else {
            if (!gt) {
                gt = ptr;
                gptr = ptr;
            } else {
                gptr.next = ptr;
                gptr = gptr.next;
            }
            ptr = ptr.next;
            gptr.next = null;
        }
    }
    if (!lt) {
        return gt;
    }
    lptr.next = gt;
    return lt;
};