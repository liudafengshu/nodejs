// 导入node url处理模块
const url = require("url");
const controller = require("./controller");
module.exports = (req, res) => {
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
      controller.index(res);
    } else {
      // 返回index.html中的图片请求
      console.log(req.url);
      controller.assert(req, res);
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
      controller.user(postData, res);
    });
  } else {
    // .......
  }
};
