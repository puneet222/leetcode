/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
    if (!head) return null;
    if (!head.next) {
        let node = new TreeNode(head.val);
        return node;
    }
    let mid = head;
    let ptr = head;
    while (ptr && ptr.next) {
        mid = mid.next;
        ptr = ptr.next.next;
    }
    let left = head;
    while (left.next !== mid) {
        left = left.next;
    }
    left.next = null;
    let right = mid.next;
    let node = new TreeNode(mid.val);
    node.left = sortedListToBST(head);
    node.right = sortedListToBST(right);
    return node;
};