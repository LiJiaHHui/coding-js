/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    // 先找出相遇节点，然后一个从head，另一个从相遇节点，同速出发，再次相遇时及入口节点
    let pre=head,cur=pre
    while(pre){
        //没有环
        if(pre.next==null){
            return null
        }
        pre=pre.next.next
        cur=cur.next
        //相遇节点
        if(pre==cur){
            pre=head
            //同速出发
            while(pre!==cur){
            pre=pre.next
            cur=cur.next
            }
           return pre

        }
    }
    return null
};