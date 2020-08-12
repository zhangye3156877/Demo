class Promise_ {
  constructor(cb){
    this.status = 'PEDDING';
    this.resolveCallback = [];
    this.rejectCallback = [];
    this.value;
    this.error;
    this.resolve = (value) => {
      if (this.status !== 'PEDDING') {
        return
      }
      this.status = 'FULFILLED';
      this.value = value;
      this.resolveCallback.forEach(cb => cb(this.value));
    }
    this.reject = (err) => {
      if (this.status !== 'PEDDING') {
        return
      }
      this.status = 'REJECTED';
      this.error = err;
      this.rejectCallback.forEach(cb => cb(this.error));
    }
    cb(this.resolve, this.reject);
  }

  then(cb1, cb2){
    if (this.status === 'PEDDING') {
      cb1 && this.resolveCallback.push(cb1);
      cb2 && this.rejectCallback.push(cb2);
    } else if(this.status === 'FULFILLED'){
      cb1 && cb1(this.value)
    } else {
      cb2 && cb2(this.error)
    }
    return new Promise_((resolve) => {resolve()});
  }
}
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