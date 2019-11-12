//插入排序
function sort(arr) {
  if (arr.length <= 1) return;
  for(let i = 0; i < arr.length;i++){
    let j = i - 1;
    let value = arr[i];
    for(; j >= 0; j--){
      if (value < arr[j]) {
        arr[j + 1] = arr[j];
      } else{
        break;
      }
    }
    arr[j + 1] = value;
  }
}



