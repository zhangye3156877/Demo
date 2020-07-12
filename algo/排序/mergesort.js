// 并归排序
function sort(arr) {
  if (arr.length <= 1) return arr;
  let n = Math.floor(arr.length / 2);
  let left =  arr.slice(0, n);
  let right = arr.slice(n);
  return merge(sort(left), sort(right));
}

function merge(left, right) {
  let arr = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      arr.push(left[leftIndex++]);
    } else {
      arr.push(right[rightIndex++]);
    }
  }
  return arr.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}