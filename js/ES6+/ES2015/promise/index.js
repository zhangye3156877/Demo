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

// 手写all
Promise.all_ = function(arr) {
  return new Promise((resolve, reject) => {
    let count = 0;
    let results = [];
    for(let i = 0; i < arr.length; i++){
      Promise.resolve(arr[i])
      .then((res) => {
        count++;
        results.push(res);
        if (count === arr.length) {
          resolve(results);
        }
      })
      .catch((err) => {
        reject(err);
      })
    }
  })
}
// Promise.all([p1, p2, p3]).then(
//   res => {
//   console.log(res)
// }, 
//   err => {
//     console.log('失败' + err)
//   }
// ).catch(error => {
//   console.log('最后回调')
// })

Promise.all_([p1, p2, p3]).then(
  res => {
  console.log(res)
}, 
  err => {
    console.log('失败' + err)
  }
).catch(error => {
  console.log('最后回调')
})