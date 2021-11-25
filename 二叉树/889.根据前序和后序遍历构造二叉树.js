/*
 * @lc app=leetcode.cn id=889 lang=javascript
 *
 * [889] 根据前序和后序遍历构造二叉树
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
 * @param {number[]} postorder
 * @return {TreeNode}
 */
//  输入：pre = [1,2,4,5,3,6,7], 
//       post = [4,5,2,6,7,3,1]
//  输出：[1,2,3,4,5,6,7]
// 前序 根左右 后序 左右根
//      根右左
var constructFromPrePost = function(preorder, postorder) {
  if(preorder.length===0)return null
  let root=new TreeNode(preorder[0])
  const mid=postorder.indexOf(preorder[1])
  const len=postorder.length
  root.left=constructFromPrePost(preorder.slice(1,mid+2),postorder.slice(0,mid+1))
  root.right=constructFromPrePost(preorder.slice(mid+2),postorder.slice(mid+1,len-1))
  return root
};
// @lc code=end

