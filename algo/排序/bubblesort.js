// 冒泡排序
function sort(arr) {
  if (arr.length <= 1) return
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length - i; j++){
      if (arr[j] > arr[j + 1]) {
        const value = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = value;
      } 
    }
  }
}