const fs = require('fs');
const http = require('http');
const path = require('path');

http.createServer(function (req, res) {

  const url = req.url;
  const data = fs.readFileSync(__dirname + '/main.html');
  if (url === '/') {
    res.writeHeader(200, {
      'content-type': 'text/html;charset="utf-8"'
    });
    res.write(data);//将index.html显示在客户端
    res.end();
  }
}).listen(3000);

http.createServer(function (req, res) {

  const url = req.url;
  const data = fs.readFileSync(__dirname + '/child.html');
  if (url === '/') {
    res.writeHeader(200, {
      'content-type': 'text/html;charset="utf-8"'
    });
    res.write(data);//将index.html显示在客户端
    res.end();
  }



}).listen(3001);