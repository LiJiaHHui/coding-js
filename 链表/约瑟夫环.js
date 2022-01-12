// 约瑟夫环
// 0,1,...,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字。
// 求出这个圆圈里剩下的最后一个数字。
function LastRemaining_Solution(n, m) {
  let arr = [],ind=0;
  for (let i = 0; i < n; i++) {
    arr[i] = i;
  }
  while (arr.length > 1) {
    ind=(ind+m)%arr.length-1//下一个要删除的位置

    if(ind>=0){
        arr.splice(ind,1);
    }else{
      // ind为-1表示应该删除数组的最后一个，此时ind应该重新开始
      arr.splice(arr.length-1,1);
      ind=0
    }
  }
  return array[0]
}
