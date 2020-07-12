 // 桶排序
 function sort(arr, bucketSize = 5) {
  if (arr.length <= 1) return arr;
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  let bucket = Math.floor((max - min) / bucketSize) + 1;
  const wrapper = [];
  for (let i = 0; i < bucket; i++) {
    wrapper[i] = [];
  }

  for (let i = 0; i < arr.length; i++) {
    const index = Math.floor((arr[i] - min) / bucketSize);
    wrapper[index].push(arr[i])
  }

  for (let i = 0; i < wrapper.length; i++) {
    insetionsort(wrapper[i]);
  }
  return wrapper.flat(Infinity);
}
// 插入排序处理桶中数据
function insetionsort(arr) {
  if (arr.length <= 1) return;
  for (let i = 0; i < arr.length; i++) {
    let j = i - 1;
    let value = arr[i];
    for (; j >= 0; j--) {
      if (value < arr[j]) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = value;
  }
}
