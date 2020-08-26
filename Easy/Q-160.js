/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let stack1 = [], stack2 = [];
    while (headA) {
        stack1.push(headA);
        headA = headA.next;
    }
    while (headB) {
        stack2.push(headB);
        headB = headB.next;
    }
    let ans = null;
    while (stack1.length > 0 && stack2.length > 0) {
        let ptr1 = stack1.pop();
        let ptr2 = stack2.pop();
        if (ptr1 === ptr2) {
            ans = ptr1;
        } else {
            return ans;
        }
    }
    return ans;
};