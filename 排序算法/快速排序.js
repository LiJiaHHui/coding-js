// 以第一个值作为基准，小的放左边数组，大的放右边数组
// 代码较简单，但是空间复杂度较大
function quickSort(array) {
    let target=array[0]
    if (array.length < 2) {
      return array;
    }
    let left=[],right=[]
    for(let i=1;i<array.length;i++){
      let cur= array[i]
      if(cur>target){
        right.push(cur)
      }
      // if(cur<target)  存在同值的情况，同值放左右都没关系
      else{
        left.push(cur)
      }
    }
    return quickSort(left).concat(target,quickSort(right))
}