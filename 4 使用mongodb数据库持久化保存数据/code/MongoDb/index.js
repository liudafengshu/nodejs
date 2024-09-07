const { MongoClient } = require('mongodb');

// 初始化信息
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
// Database Name
const dbName = 'mytest';

async function groutMongodb() {
    // 连接服务
    await client.connect();
    // 连接mytest库
    const db = client.db(dbName);
    // 连接ff集合
    return db.collection('ff');
}

async function main() {
    const collection = await groutMongodb()

    // 插入一条数据
    // const data = await collection.insertOne({ name: "张三", age: "12" })
    // 插入多条数据
    // const data = await collection.insertMany([
    //     { name: "张三", age: 12 },
    //     { name: "张1", age: 18},
    //     { name: "张2", age: 20 },
    // ])

    // 查找一条名为张三的数据
    // const data = await collection.findOne({ name: "张三" })
    // 查找所有名为张三的数据,查找多条数据需要 toArray处理
    // const data = await collection.find({ name: "张三" }).toArray()
    // 查找大于18岁的数据
    // const data = await collection.find({ age: { $gt: 18 } }).toArray()
    // 查找小于18岁的数据
    // const data = await collection.find({ age: { $lt: 18 } }).toArray()

    // 修改一条数据
    // const data = await collection.updateOne({ name: "李4" }, { $set: { age: 999 } })
    // 修改多数据
    // const data = await collection.updateMany({ name: "lisa" }, { $set: { age: 888 } })

    // 删除一条数据 
    // const data = await collection.deleteOne({ name: "张三" })
    // 删除多条数据 
    const data = await collection.deleteMany({ name: "张三" })

    return data
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());