## 1.express 项目构建
```shell
# 初始化项目，学习使用的这个
npm init -y
npm i express

#或者使用express 生成器
npx express-generator
npm install
```

```js
// 管理用户数据信息
const express = require("express");
const fs = require("fs");

// 将回调函数变成promise
const { promisify } = require("util")
const readFile = promisify(fs.readFile)

const app = express();
// app.get("/", (req, res) => {
//     // 获取数据
//     fs.readFile("./db1.json", (err, data) => {
//         if (!err) {
//             //处理数据
//             const db = JSON.parse(data);
//             // 返回数据
//             res.send(db.users);
//         } else {
//             // 返回错误码和错误
//             res.status(500).json(err);
//         }
//     });
// });



app.get("/", async (req, res) => {
    // 回调函数变为promise写法
    try {
        const data = await readFile("./db1.json", "utf8")
        const db = JSON.parse(data);
        // 返回数据
        res.send(db.users);
    } catch (err) {
        res.status(500).json(err);
    }

});


app.listen(3000, () => {
    console.log("http:127.0.0.1:3000");
});


```

## 2 处理客户端post请求数据

```js
const { log } = require("console");
const express = require("express");
const fs = require("fs");

// 将回调函数变成promise
const { promisify } = require("util")
const readFile = promisify(fs.readFile)

const app = express();

/**
 * 重点：
 * 使用express.urlencoded()，
 * post请求才能获取到
 * content-type为x-www-form-urlencoded 类型的body参数
 */
app.use(express.urlencoded())
// 同上，post请求获取json类型的body参数需要 app.use(express.json())
app.use(express.json())

// 请求用户列表
app.get("/", async (req, res) => {
    // 回调函数变为promise写法
    try {
        const data = await readFile("./db1.json", "utf8")
        const db = JSON.parse(data);
        // 返回数据
        res.send(db.users);
    } catch (err) {
        res.status(500).json(err);
    }
});

// 添加用户
app.post("/", (req, res) => {
    // 查看headers。可以看到content-types
    console.log(req.headers)
    // 通过req.body获取post参数
    console.log(req.body)
})

app.listen(3000, () => {
    console.log("http:127.0.0.1:3000");
});

```

## 3 写入post数据
```js
app.post("/", async (req, res) => {
    // 查看headers。可以看到content-types
    // console.log(req.headers)
    // // 通过req.body获取post参数
    // console.log(req.body)

    let body = req.body
    if (!body) {
        // 如果用户没有传递body信息，则报错
        res.status(402).json({ message: "缺少用户信息" })
    }
    // 获取db信息
    let back = await readFile("./db1.json", "utf8").catch(err => {
        res.status(403).json(err)
    });
    // 处理数据
    const json = JSON.parse(back)
    const id = json.users.length
    json.users.push({ id, ...body })
    // 将数据写入db文件
    await writeFile("./db1.json", JSON.stringify(json)).catch(err => {
        res.status(403).json(err)
    })
    // 返回成功状态
    res.status(200).send({
        msg: "添加成功"
    })
    // fs.write(json)
})
```

## 4 将db1.json的读取和写入封装到 dbOperation.js
## 5 