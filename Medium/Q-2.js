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
var addTwoNumbers = function (l1, l2) {
    let ptr1 = l1;
    let ptr2 = l2;
    let carry = 0;
    let sol = null;
    let sptr = sol;
    while (ptr1 !== null || ptr2 !== null || carry > 0) {
        let sum = (ptr1 ? ptr1.val : 0) + (ptr2 ? ptr2.val : 0) + carry;
        carry = Math.floor(sum / 10);
        if (!sol) {
            sol = new ListNode(sum % 10);
            sptr = sol;
        } else {
            sptr.next = new ListNode(sum % 10);
            sptr = sptr.next;
        }
        ptr1 = ptr1 ? ptr1.next : ptr1;
        ptr2 = ptr2 ? ptr2.next : ptr2;
    }
    return sol;
};

var updateSolution = function (sol, sptr, sum) {

}