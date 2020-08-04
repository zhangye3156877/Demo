const http = require('http');
const path = require('path');
const fs = require('fs');
const qs = require('querystring');
const url = require('url');

const server = http.createServer((req, res) => {
  const urlsObj = url.parse(req.url);
  const urls = urlsObj.pathname;
  const keys = qs.parse(urlsObj.query);
  
  if (urls === '/') {
    const file = fs.readFileSync(path.resolve(__dirname,'index.html'));
    res.write(file);
    res.end();
  } else if (urls === '/get') {
    console.log(1)
    res.writeHead(200,{'Content-Type':'application/json;charset=utf-8'});
    
    if (keys.callback){
      res.end('callback(100)');
    } else {
      res.end('无query返回');
    }
  } else if (urls === '/ajax.js') {
    const file = fs.readFileSync(path.resolve(__dirname,'ajax.js'));
    res.writeHeader(200, {
      "Content-Type" : "application/javascript"
    });
    res.write(file);
    res.end();
  } else {
    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
    res.end();    
  }
})

server.listen(3000, () => {
  console.log('running in 3000')
})