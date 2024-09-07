// 导入node文件处理模块
const { assert } = require("console");
const fs = require("fs");

module.exports = {
  index: (res) => {
    fs.readFile("./index.html", "utf-8", (err, data) => {
      res.write(data);
      res.end();
    });
  },
  assert: (req, res) => {
    fs.readFile("./" + req.url, function (err, data) {
      //   可以直接使用end返回数据
      res.end(data);
    });
  },
  user: (postData, res) => {
    console.log(postData);
  },
};
