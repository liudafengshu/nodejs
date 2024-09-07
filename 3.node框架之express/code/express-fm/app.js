
const express = require("express");

const dbOperation = require("./dbOperation")


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
    try {
        const data = await dbOperation.getUserlist()
        // 返回数据
        res.send(data.users);
    } catch (err) {
        res.status(500).json(err);
    }

});

// 添加用户
app.post("/", async (req, res) => {
    // 查看headers。可以看到content-types
    // console.log(req.headers)
    // // 通过req.body获取post参数
    // console.log(req.body)

    let body = req.body
    if (!body.name || !body.age) {
        // 如果用户没有传递body信息，则报错
        res.status(402).json({ message: "缺少用户信息" })
    }
    // 写入db信息
    await dbOperation.addUser(body).catch(err => {
        res.status(403).json(err)
    })
    res.status(200).send({
        msg: "添加成功"
    })
    // fs.write(json)
})

// 修改用户
app.put("/:id", async (req, res) => {
    const id = Number(req.params.id)
    const body = req.body
    console.log(id, body)
    const dbObj = await dbOperation.getUserlist()
    const user = dbObj.users.find(item => item.id === id)
    if (!user) {
        res.status(403).json({
            err: "该id用户不存在"
        })
    }
    user.name = body.name || user.name;
    user.age = body.age || user.age;
    await dbOperation.writeFile(dbObj).catch(err => {
        res.status(500).json(err)
    })
    res.status(200).send({
        meg: "修改成功",
    })
})

app.listen(3000, () => {
    console.log("http:127.0.0.1:3000");
});
