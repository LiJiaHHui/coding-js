/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
  //  👇👇
// 【 3，5，6，2，4】
var reverseList = function(head) {
  // 交换左右节点
  let pre=null,node=head
  while(node){
   let next=node.next
    node.next=pre// 改变node指针方向
    // 前移节点
    pre=node
    node=next
  }
  return pre
};
// es6解构解法
// let [p, c] = [null, head]
// // const next = curr.next; curr.next = prev; prev = curr; curr = next;
// while (c) [c.next, p, c] = [p, c, c.next]
// return p

// 双指针
// @lc code=end

