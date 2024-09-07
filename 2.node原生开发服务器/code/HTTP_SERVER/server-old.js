// 导入nodehttp模块
const http = require("http");
// 导入node文件处理模块
const fs = require("fs");
// 导入node url处理模块
const url = require("url");

// 创建http实例
const server = http.createServer();
// 监听8080端口
server.listen(8080, function () {
  console.log("http://127.0.0.1:8080/");
});
// 监听服务端请求
server.on("request", function (req, res) {
  //   console.log("9999");
  // 返回响应
  //   res.write("88888");

  //   设置响应数据类型为utf-8
  //   res.setHeader("Content-Type", "text/plain;charset=utf-8");
  //   res.write("你好");

  // 设置响应html
  //   res.setHeader("Content-Type", "text/html;charset=utf-8");
  //   res.write("<h1>你好</h1>");

  // 断开连接
  //   res.end();

  // 通过req.method获取请求类型
  console.log(req.method);

  if (req.method === "GET") {
    console.log("GET请求");
    // 通过url.parse 获取url上的信息,第二个参数为ture，会讲query格式化为object
    // 通过query获取get请求参数
    const urlInfo = url.parse(req.url, true);
    console.log(urlInfo.query);

    if (req.url === "/") {
      // 返回index.html文件
      // 返回index.html
      fs.readFile("./index.html", "utf-8", (err, data) => {
        res.write(data);
        res.end();
      });
    } else {
      // 返回index.html中的图片请求
      console.log(req.url);
      fs.readFile("./" + req.url, function (err, data) {
        //   可以直接使用end返回数据
        res.end(data);
      });
    }
  } else if (req.method === "POST") {
    console.log("接受到了post请求");
    // 流式获取post参数
    let data = "";
    req.on("data", (d) => {
      data += d;
    });
    // 获取完成后
    req.on("end", () => {
      // 引入node核心包querystring来处理data数据
      const postData = require("querystring").parse(data);
      console.log(postData.userName);
      res.end();
    });
  } else {
    // .......
  }
});

/**
 * 使用nodemon运行js，可以热更新
 * npm i nodemon -g
 * nodemon server.js
 */
