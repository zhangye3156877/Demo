const middlewares = [];

function use(callback) {
  middlewares.push(callback);
}
function deferFn(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(value)
      resolve(value);
    }, 500)
  })
}
function compose(middlewares) {
  let context = {};
  dispatch(0);
  function dispatch(index) {
    const fn = middlewares[index];
    if (!fn){
      return Promise.resolve(console.log('没有next了', context));
    }
    return Promise.resolve(fn(context, () => {
      return dispatch(index + 1);
    }))
  }
}

use(async (context, next) => {
  console.log(1);
  await deferFn(2);
  context.a = 1;
  await next();
  console.log(3);
})
use(async (context, next) => {
  console.log(4);
  await deferFn(5);
  context.b = 2;
  await next();
  console.log(6);
})
use(async (context, next) => {
  console.log(7);
  await deferFn(8);
  context.c = 3;
  await next();
  console.log(9);
})

compose(middlewares);