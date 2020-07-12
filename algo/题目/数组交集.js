// 求数组交集
// 1
function _(a, b) {
  const result = a.filter((item) => {
    return b.includes(item)
  })
  return result;
}