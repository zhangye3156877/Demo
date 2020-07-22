const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {

  if (req.url === '/') {
    const data = fs.readFileSync(__dirname + '/浏览器原生.html');
    res.writeHeader(200, {
      'content-type': 'text/html;charset="utf-8"'
    });
    res.write(data);
    res.end();
  }
  if (req.url === '/a.js'){
    const data = fs.readFileSync(__dirname + '/a.js');
    res.writeHeader(200, {
      'content-type': 'application/javascript;charset="utf-8"'
    });
    res.write(data);
    res.end();
  }
}).listen(3000)