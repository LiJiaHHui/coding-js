/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(!root) return [] 
  let res=[]
  let tmp=[root]
  while(tmp.length){
    let a=[]
    let size=tmp.length
    for(let i=0;i<size;i++){
      let node=tmp.shift()//从左到右取
      a.push(node.val)
      node.left&&tmp.push(node.left)//push下一层的数据
      node.right&&tmp.push(node.right)
    }
    res.push(a)
  }
  return res
};
// @lc code=end


