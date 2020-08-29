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
var removeZeroSumSublists = function (head) {
    let stack = [];
    let ptr = head;
    while (ptr) {
        let count = 0, sum = ptr.val;
        if (ptr.val === 0) {
            ptr = ptr.next;
            continue;
        }
        for (let i = stack.length - 1; i >= 0; i--) {
            sum += stack[i].val;
            count++;
            if (sum === 0) break;
        }
        if (sum === 0 && count > 0) {
            while (count > 0) {
                stack.pop();
                count--;
            }
        } else {
            stack.push(ptr);
        }
        ptr = ptr.next;
    }
    head = null;
    for (let i = 0; i < stack.length; i++) {
        if (head === null) {
            head = stack[i];
            ptr = head;
        } else {
            ptr.next = stack[i];
            ptr = ptr.next;
        }
    }
    if (head) {
        ptr.next = null;
    }
    return head;
};