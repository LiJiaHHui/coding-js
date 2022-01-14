<<<<<<< HEAD
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
    var removeDuplicateNodes = function(head) {
        if(head==null)return head//为空的情况
    let map=new Map(),cur=head,last=cur
    cur=cur.next
    map.set(last.val,last.val)
    while(cur){
      if(map.has(cur.val)){
        // 删除节点
        cur=cur.next
        last.next=cur
      }
      else{
        map.set(cur.val,cur.val)  //添加map
        cur=cur.next//后移
        last=last.next
      }
      
    }
    cur=head
    return cur
=======
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
    var removeDuplicateNodes = function(head) {
        if(head==null)return head//为空的情况
    let map=new Map(),cur=head,last=cur
    cur=cur.next
    map.set(last.val,last.val)
    while(cur){
      if(map.has(cur.val)){
        // 删除节点
        cur=cur.next
        last.next=cur
      }
      else{
        map.set(cur.val,cur.val)  //添加map
        cur=cur.next//后移
        last=last.next
      }
      
    }
    cur=head
    return cur
>>>>>>> 323286a146e06f96a532c36ee07fd101d7b6ac55
	}