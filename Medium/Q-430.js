/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
    if (head === null) {
        return head;
    }
    let ptr = head;
    while (ptr) {
        if (ptr.child) {
            let next = ptr.next;
            let child = flatten(ptr.child);
            ptr.next = child;
            child.prev = ptr;
            ptr.child = null;
            ptr = child;
            while (ptr.next) {
                ptr = ptr.next;
            }
            ptr.next = next;
            if (next) {
                next.prev = ptr;
            }
            ptr = next;
        } else {
            ptr = ptr.next;
        }
    }
    return head;
};