/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] åè½¬é¾è¡¨
 */

// @lc code=start
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
  //  ðð
// ã 3ï¼5ï¼6ï¼2ï¼4ã
var reverseList = function(head) {
  // äº¤æ¢å·¦å³èç¹
  let pre=null,node=head
  while(node){
   let next=node.next
    node.next=pre// æ¹ånodeæéæ¹å
    // åç§»èç¹
    pre=node
    node=next
  }
  return pre
};
// es6è§£æè§£æ³
// let [p, c] = [null, head]
// // const next = curr.next; curr.next = prev; prev = curr; curr = next;
// while (c) [c.next, p, c] = [p, c, c.next]
// return p

// åæé
// @lc code=end

