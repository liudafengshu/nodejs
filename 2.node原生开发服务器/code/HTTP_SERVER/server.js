// 导入nodehttp模块
const http = require("http");
const router = require("./router");

// 创建http实例
const server = http.createServer();
// 监听8080端口
server.listen(8080, function () {
  console.log("http://127.0.0.1:8080/");
});
// 监听服务端请求
server.on("request", function (req, res) {
  router(req, res);
});

/**
 * 使用nodemon运行js，可以热更新
 * npm i nodemon -g
 * nodemon server.js
 */
