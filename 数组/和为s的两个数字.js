/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  let myMap=new Map(),res=[]
  nums.forEach((item,ind)=>{
      myMap.set(item,item)
  })
  nums.forEach(item=>{
      //因为只用输出一对就行了
      if(myMap.has(target-item)&&res.length===0){
          res.push(myMap.get(target-item),item)
      }
  })
  return res
};