const fs = require("fs");

// 将回调函数变成promise
const { promisify } = require("util")
const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

exports.getUserlist = async () => {
    // 回调函数变为promise写法
    const data = await readFile("./db1.json", "utf8")
    const dbObj = JSON.parse(data);
    return dbObj
}

exports.addUser = async (body) => {
    let back = await readFile("./db1.json", "utf8")
    // 处理数据
    const json = JSON.parse(back)
    const id = json.users.length
    json.users.push({ id, ...body })
    // 将数据写入db文件
    await writeFile("./db1.json", JSON.stringify(json))
}

exports.writeFile = async (obj) => {
    await writeFile("./db1.json", JSON.stringify(obj))
}