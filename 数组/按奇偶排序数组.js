/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
  let res=[]
  nums.forEach((item,ind)=>{
      if(item%2===0){
          res.unshift(nums[ind])
      }else{
          res.push(nums[ind])
      }
  })
  return res
};