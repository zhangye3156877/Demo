// app.js
const Hapi = require('hapi');
const config =require('./config');
const routesHelloHapi  = require('./routes/hello-hapi');
const routesShops = require('./routes/shops');
const routesOrders = require('./routes/orders');
// 引入自定义的 hapi-swagger 插件配置
const pluginHapiSwagger = require('./plugins/hapi-swagger');

const server = new Hapi.Server();
// 配置服务器启动 host 与端口
server.connection(config);

const init = async () => {
  await server.register([
    // 为系统使用 hapi-swagger
    ...pluginHapiSwagger,
  ]);
  server.route([
    // 创建一个简单的 hello hapi 接口
   ...routesHelloHapi,
   ...routesShops,
   ...routesOrders
  ]);
  // 启动服务
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();