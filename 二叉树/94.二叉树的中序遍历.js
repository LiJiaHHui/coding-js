/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 输入：root = [1,null,2,3]
// 输出：[1,3,2]

// 输入：root = [1,2]
// 输出：[2,1]

// 输入：root = [1,null,2]
// 输出：[1,2]
var inorderTraversal = function(root) {
  let res=[]
  // 递归
  const fn=(val)=>{
    if(val===null){
      return 
    }
    fn(root.left)
    res.push(root.value)
    fn(root.right)
  }
  fn(root)
  return res
};
// @lc code=end

