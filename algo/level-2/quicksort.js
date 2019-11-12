// 快速排序
function sort(arr, left = 0, right = arr.length) {
  if (right > left) {
    let point = right;
    const index = move(arr, point, left, right);
    sort(arr, left, index - 1 > left ? index - 1 : left);
    sort(arr, index + 1 > right ? right : index + 1, right);
  }
}

function move(arr, point, left, right) {
  let leftStart = left;
  const value = arr[point];
  for (let i = left; i < right; i++) {
    if (arr[i] < value) {
      swap(arr, leftStart, i);
      leftStart++;
    }
  }
  swap(arr, leftStart, point);
  return leftStart;
}

function swap(arr, i, j) {
  const value = arr[i];
  arr[i] = arr[j];
  arr[j] = value;
}