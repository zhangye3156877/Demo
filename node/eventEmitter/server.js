var em = require('events');
var myEm1 = new em();
var myEm2 = new em();

myEm1.on('normal', function(x) {
  console.log(`
  来源:myEm1
  类型:normal
  消息:${x}`)
})
myEm1.on('warning', function(x) {
  console.log(`
  来源:myEm1
  类型:warning
  消息:${x}`)
})
myEm2.once('once', function(){
  console.log('该消息只监听一次');
})

var conut = 0;
setInterval(() => {
  conut++;
  myEm1.emit('normal', conut);
  myEm1.emit('warning', conut);
  myEm2.emit('once', conut);
}, 1000)