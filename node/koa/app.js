const Koa = require('koa');
const app = new Koa();

const static = require('koa-static');
app.use(static(__dirname));

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);