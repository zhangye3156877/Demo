const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url)
  if (req.url === '/') {
    var readStream = fs.createReadStream(__dirname + '/test.html', 'utf-8');
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    readStream.pipe(res)
  } else if (req.url === '/a.js') {
    var readStream = fs.createReadStream(__dirname + '/worker.js', 'utf-8');
    res.writeHead(200, {
      'Content-Type': 'application/javascript'
    });
    readStream.pipe(res)
  } else {
    res.end('')
  }

 
})

server.listen(3000);