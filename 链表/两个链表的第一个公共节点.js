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
 //利用二次遍历，使两个指针走的路一样长，并且遇到相同节点停止  
const getIntersectionNode = (A, B) => {
    let pA = A,
        pB = B;
    while(pA!==pB){
        pA=pA!==null?pA.next:B
        pB=pB!==null?pB.next:A

    }
    return pA
};
