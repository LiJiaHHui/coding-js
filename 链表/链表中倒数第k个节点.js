/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let pre=head,cur=head
    // pre先走k-1步，然后双指针循环
    // pre为null后，输出当前cur
    while(k>0){
        pre=pre.next
        k--
    }
    while(pre){
        pre=pre.next
        cur=cur.next
    }
    return cur
};