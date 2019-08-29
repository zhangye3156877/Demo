const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url)
  if (req.url === '/') {
    var readStream = fs.createReadStream(__dirname + '/index.html', 'utf-8');
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    return readStream.pipe(res)
  }
  if (req.url === '/img') {
    var readStream = fs.createReadStream(__dirname + '/t-1.jpg');
    res.writeHead(200, {
      'Content-Type': 'image/jpeg'
    });
    return readStream.pipe(res)
  }
  
  res.end('')


})

server.listen(3000);