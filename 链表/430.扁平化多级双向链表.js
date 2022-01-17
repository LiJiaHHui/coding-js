/*
 * @lc app=leetcode.cn id=430 lang=javascript
 *
 * [430] 扁平化多级双向链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var flatten = function(head) {
  let fn=(head)=>{
    let node=head
    let tail=null
    while(node){
     let next=node.next//next存起来
      if(node.child){
        let child=node.child//子节点
        let tailList=fn(node.child)//尾节点，此时node.child不为空

        node.next=child//头部指向子节点
        child.prev=node
        node.child=null//子节点清空

        tailList.next=next//尾节点连接
        if(next){
        next.prev=tailList}
        tail=tailList
      }else{
        tail=node 
      }
      node=next//循环
    }
    return tail//返回尾节点
    
  }
 fn(head)
  return head
};
