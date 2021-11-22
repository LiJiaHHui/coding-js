/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function(root) {
  let res=[]
  // 递归
  // let fn=(node)=>{
  //   if(node===null){
  //     return
  //   }
  //   res.push(node.val)
  //   fn(node.left)
  //   fn(node.right)
  // }
  // fn(root)
  // return res

  // 迭代
  let stack=[]
  while(root){
    res.push(root.val)
    if(root.right)
    stack.push(root.right)
    root=root.left
  }
  while(stack.length){
    node=stack.pop()
    res.push(node.val)
    if(node.right)
    stack.push(node.right)
    node=node.left
    while(node){
      res.push(node.val)
      if(node.right)
      stack.push(node.right)
      node=node.left
    }
  }

  return res
};
// @lc code=end

