/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // 双指针解决,并且需要直接返回结果，不然会超时    
    let cur=head,pre=cur
    while(pre){
      // 防止后续pre.next.next出错
      if(pre.next===null)
      return false
      // 先改变再判断
      cur=cur.next
      pre=pre.next.next
      if(cur==pre){
        return true
      }
    }
    return false
};
// @lc code=end

