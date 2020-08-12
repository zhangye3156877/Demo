const p1 = 123;
const p2 = Promise.resolve(100);
const p3 = new Promise((resolve, reject) => {
  const bol = Math.random() * 10 > 5 ? true : false;

  setTimeout(() => {
    if (bol) {
      resolve('p3成功')
    } else {
      reject('p3失败')
    }
  }, 1000)
})

Promise.all([p1, p2, p3]).then(
  res => {
  console.log(res)
}, 
  err => {
    console.log('失败' + err)
  }
).catch(error => {
  console.log('最后回调')
})
