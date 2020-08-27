/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (root, k) {
    let ans = [];
    let size = 0;
    let ptr = root;
    while (ptr) {
        ptr = ptr.next;
        size++;
    }
    ptr = root;
    while (k != 0) {
        let head = ptr;
        let p = ptr;
        let max = Math.ceil(size / k);
        size = size - max;
        k--;
        if (max === 0) {
            ans.push(null);
            continue;
        }
        while (max != 1) {
            p = p.next;
            max--;
        }
        ptr = p.next;
        p.next = null;
        ans.push(head);
    }
    return ans;
};