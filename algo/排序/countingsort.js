// 记数排序
function sort(arr) {
  if (arr.length <= 1) return arr;
  let bucket = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > bucket) bucket = arr[i]
  }

  // 存放每个分区数据个数
  let count = new Array(bucket + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }
  let startIndex = 0;
  for (let i = 0; i < count.length; i++) {
    while(count[i] > 0) {
      arr[startIndex++] = i;
      count[i]--;
    }
  }

  return arr;
}