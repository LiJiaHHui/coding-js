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
 * @return {number}
 */
var minDepth = function(root) {
 if(!root) return 0
    let que=[root]
    let dep=1
    //此处思想与层序遍历类似
    while(que.length){
        const len=que.length//后续改变que的长度，所以需要提前存好
        //每一层遍历
        for(let i=0;i<len;i++){
            let node=que.shift()
            if(node.left===null&&node.right===null){
                return dep
            }
            node.left?que.push(node.left):''
            node.right?que.push(node.right):''
            //dep++
        }
        dep++//等每一层遍历完
    }
    return dep
};