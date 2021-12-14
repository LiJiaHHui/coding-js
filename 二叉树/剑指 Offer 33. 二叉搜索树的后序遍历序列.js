/**
 * @param {number[]} postorder
 * @return {boolean}
 */
 var verifyPostorder = function(postorder) {
  if(postorder.length<=2)return true
  let root=postorder.pop()
  let right=0
  // 找出分界点
  while(postorder[right]<root){
        right++
  }
  let rightOrd=postorder.slice(right)
  // 利用右子树一定比根节点大
  let res= rightOrd.every((item)=>
    item>root
  )
  return res&&verifyPostorder(postorder.slice(0,right))&&verifyPostorder(rightOrd)
};
