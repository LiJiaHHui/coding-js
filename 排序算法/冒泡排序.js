// 大到小排序
function booblu(arr) {
  for (let i = 0; i < arr.length; i++) {
    let finish = true;
    for (let j = arr.length - i - 1; j < arr.length; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];//es6交换
        finish = false;
        // let flag=arr[j]
        // arr[j]=arr[j+1]
        // arr[j+1]=flag
      }
    }
    if (finish) {//没有冒泡，直接结束
      break;
    }
  }
  return arr;
}
