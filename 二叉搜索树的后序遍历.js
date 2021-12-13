/**
 * @param {number[]} postorder
 * @return {boolean}
 */
 var verifyPostorder = function(postorder) {
  if(postorder.length<=2)return true
let root=postorder.pop()
let left=0,right=0
while(postorder[left]<root){
      left++
}
let leftOrd=postorder.slice(0,left)
let res= leftOrd.every(item=>{
  return item<root
})
return res&&verifyPostorder(leftOrd)&&verifyPostorder(postorder)
};