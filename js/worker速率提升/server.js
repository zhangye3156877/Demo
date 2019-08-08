const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url)
  if (req.url === '/test1') {
    var readStream = fs.createReadStream(__dirname + '/test1.html', 'utf-8');
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    return readStream.pipe(res)
  }
  if (req.url === '/test2') {
    var readStream = fs.createReadStream(__dirname + '/test2.html', 'utf-8');
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    return readStream.pipe(res)
  }
  if (req.url === '/test3') {
    var readStream = fs.createReadStream(__dirname + '/test3.html', 'utf-8');
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    return readStream.pipe(res)
  }
  if (req.url === '/worker1.js') {
    var readStream = fs.createReadStream(__dirname + '/worker1.js', 'utf-8');
    res.writeHead(200, {
      'Content-Type': 'application/javascript'
    });
    return readStream.pipe(res)
  }
  if (req.url === '/worker2.js') {
    var readStream = fs.createReadStream(__dirname + '/worker2.js', 'utf-8');
    res.writeHead(200, {
      'Content-Type': 'application/javascript'
    });
    return readStream.pipe(res)
  }
  if (req.url === '/worker3.js') {
    var readStream = fs.createReadStream(__dirname + '/worker3.js', 'utf-8');
    res.writeHead(200, {
      'Content-Type': 'application/javascript'
    });
    return readStream.pipe(res)
  }
  res.end('')


})

server.listen(3000);