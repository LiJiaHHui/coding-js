/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function(root) {
  let res=[],stack=[]
  // 递归
  // let fn=(root)=>{
  //   while(!root) return
  //   fn(root.left)
  //   fn(root.right)
  //   res.push(root.val)
  // }
  // fn(root)
  
  // 后序遍历迭代 左右根
  // unshift 从前面放入，实际顺序 根右左
  // 栈先进后出 所以栈中放入左子树
  while(root){
    res.unshift(root.val)
    if(root.left)stack.push(root.left)
    root=root.right
  }
  while(stack.length){
    root=stack.pop()
    res.unshift(root.val)
    if(root.left)stack.push(root.left)
    root=root.right
    while(root){
      res.unshift(root.val)
      if(root.left)stack.push(root.left)
      root=root.right
    }
  }
  return res
};
// @lc code=end

