var http = require("http");
var emitter = require('events');
var emitter1 = new emitter();
var current = 0;
var interval;
http.createServer(function (req, res) {
    var fileName = "." + req.url;

    if (fileName === "./stream") {
        res.writeHead(200, {
            "Content-Type":"text/event-stream",
            "Cache-Control":"no-cache",
            "Connection":"keep-alive",
            "Access-Control-Allow-Origin": '*',
        });
        
        emitter1.on('sendmessage', function(x) {
          var obj = {};
          obj.name = '测试';
          obj.count = x;
          var str = JSON.stringify(obj);
          res.write(`data:${str}\n\n`);
        })

        req.connection.addListener("close", function () {
            clearInterval(interval);
        }, false);
    }
}).listen(3000, "127.0.0.1");

// 模拟使用场景-需要条件触发时通讯
interval = setInterval(() => {
  emitter1.emit('sendmessage',++current)
}, 1000)