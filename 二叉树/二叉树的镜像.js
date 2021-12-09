/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var mirrorTree = function(root) {
  if(!root) return null//注意返回
  let tmp=root.left
  root.left=root.right
  root.right=tmp
  mirrorTree(root.left)
  mirrorTree(root.right)
  return root//直接返回root
};
// 本来是直接用递归的，写着写着觉得和层序遍历好像啊
// 一波操作后发现行不通❌，层序遍历返回的是数组，这里需要返回二叉树❗。。。。

