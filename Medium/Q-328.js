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
var oddEvenList = function (head) {
    if (!head) {
        return head;
    }
    let ptro = head;
    let ptre = head.next;
    let heade = ptre;
    while ((ptro && ptro.next) && (ptre && ptre.next)) {
        ptro.next = ptro.next.next;
        ptre.next = ptre.next.next;
        ptro = ptro.next;
        ptre = ptre.next;
    }
    if (ptro) {
        ptro.next = heade;
    } else {
        ptro = head;
        while (ptro.next) {
            ptro = ptro.next;
        }
        ptro.next = heade;
    }
    return head;
};