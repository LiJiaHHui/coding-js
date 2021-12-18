/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */

//  输入：root = [5,3,6,2,4,null,null,1], k = 3
//  输出：3
// node递归，k不需要
// 不能直接在递归中直接返回node的值，因为node是会随递归变化的，所以需要变量来存储
// 利用中序遍历来判断



var kthSmallest = function(root, k) {
 let res=null
 const fn=(node)=>{
   if(!node)return null
  if(k>0){
    // 中序遍历
    fn(node.left)
    // 判断根节点
    if(--k===0)  res=node.val
    fn(node.right)
  }

 }
 fn(root)
return res
};



// 非递归。。。利用栈的特点，后进先出，和二叉搜索树的特定，左子树一定小于根节点
var kthSmallest = function(root, k) {
  let stack=[]
  let node=root
  while(node||stack.length>0){
    // 左子树遍历
    while(node){
      stack.push(node)
      node=node.left
    }
    node=stack.pop()//此时的node是树里最小的
    if(--k===0) return node.val
    node=node.right
  }
  return null //否则返回空节点
};








// @lc code=end