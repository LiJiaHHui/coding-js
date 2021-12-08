/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
// 由于根元素并不参与比较，所以是在内部进行递归
var isSymmetric = function(root) {
  
  let dp=(left,right)=>{
    if(left==null&&right==null) return true//属于内部的循环，判断到最后为空时
    if(left&&right){
      return left.val==right.val&&dp(left.left,right.right)
      &&dp(left.right,right.left)//镜像对称
    }else{
      return false
    }
  }
 return dp(root.left,root.right)
};
// @lc code=end

