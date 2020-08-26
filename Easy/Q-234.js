/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let ptr1 = head;
    let ptr2 = head;
    let palin = true;
    while (ptr2 && ptr2.next) {
        ptr1 = ptr1.next;
        ptr2 = ptr2.next.next;
    }
    let isOdd = ptr2 ? true : false;
    let arr = [];
    ptr2 = head;
    while (ptr2 != ptr1) {
        arr.push(ptr2.val);
        ptr2 = ptr2.next;
    }
    ptr1 = isOdd ? ptr1.next : ptr1;
    while (ptr1) {
        if (ptr1.val !== arr.pop()) {
            palin = false;
            break;
        }
        ptr1 = ptr1.next;
    }
    return palin;
};