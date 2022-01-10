/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
  // 可视为是图的遍历，用map记录，旧节点=>新节点
  let node=head,map=new Map()
  while(node){
      map.set(node,new Node(node.val))
      node=node.next
  }
  node=head
  // 循环赋值
  while(node){
    // 判断node.next是否存在，
    // 如果不做判断，将会报node.next，node undefined的错误
    map.get(node).next=node.next ?map.get(node.next): null
    map.get(node).random=node.random ?map.get(node.random): null
    node=node.next
  }
  return map.get(head)
};
