/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// 输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。
// 前序 根左右 中序 左根右
var buildTree = function(preorder, inorder) {
  if(preorder.length===0) return null//退出循环
  let root=new TreeNode(preorder[0])//创建root节点
  let mid=inorder.indexOf(preorder[0])//前序遍历第一个是根
  root.left=buildTree(preorder.slice(1,mid+1),inorder.slice(0,mid))
  root.right=buildTree(preorder.slice(mid+1),inorder.slice(mid+1))
  return root
};
// @lc code=end

