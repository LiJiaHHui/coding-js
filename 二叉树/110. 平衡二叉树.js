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
 //dfs？
var isBalanced = function(root) {
    if(!root)return true
    let flag=true
    let fn=(node)=>{
        if(!node)return 0
        let left=fn(node.left)//左子树
        let right=fn(node.right)右子树
        //两者之差
        if(Math.abs(left-right)>1)flag=false
        return Math.max(left,right)+1
    }
    fn(root)
    return flag
};