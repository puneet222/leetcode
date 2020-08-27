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
    let stack1 = [];
    let stack2 = [];
    while (l1) {
        stack1.push(l1.val);
        l1 = l1.next;
    }
    while (l2) {
        stack2.push(l2.val);
        l2 = l2.next;
    }
    let ans = [];
    let carry = 0;
    while (stack1.length > 0 || stack2.length > 0 || carry > 0) {
        let sum = (stack1.length > 0 ? stack1.pop() : 0) + (stack2.length > 0 ? stack2.pop() : 0) + carry;
        ans.push(sum % 10);
        carry = Math.floor(sum / 10);
    }
    let head = null;
    let ptr = null;
    while (ans.length > 0) {
        let node = new ListNode(ans.pop());
        if (!head) {
            head = node;
            ptr = head;
        } else {
            ptr.next = node;
            ptr = ptr.next;
        }
    }
    return head;
};