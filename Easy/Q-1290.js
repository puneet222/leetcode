/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
    let bin = "";
    let ptr = head;
    let len = 0;
    let num = 0;
    while (ptr) {
        bin += ptr.val;
        ptr = ptr.next;
        len++;
    }
    len = len - 1;
    [...bin].forEach(bit => {
        num += Math.pow(2, len) * Number(bit);
        len--;
    });
    return num;
};