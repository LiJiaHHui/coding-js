/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
//  中序遍历 inorder = [9,3,15,20,7]
//  后序遍历 postorder = [9,15,7,20,3]
//  根节点 后序最后一个
var buildTree = function(inorder, postorder) {
  if(postorder.length==0)return null
  const len=postorder.length
  const root=new TreeNode(postorder[len-1])//创建根节点，注意是len-1
  const mid=inorder.indexOf(postorder[len-1])
  root.left=buildTree(inorder.slice(0,mid),postorder.slice(0,mid))
  root.right=buildTree(inorder.slice(mid+1),postorder.slice(mid,len-1))
  return root
};
// @lc code=end



