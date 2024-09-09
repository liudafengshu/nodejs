const mongoose = require('mongoose');
const userSchema = require("./Schema/user")
const VideoSchema = require("./Schema/user")
const config = require("../config")


async function main() {
    await mongoose.connect(config.mongodb);
}
main().then(() => {
    console.log("链接成功");
}).catch(err => console.log("链接失败", err));

// 如果有这个集合就会链接，如果没有这个集合，就会创建一个名字后面加s的集合
const User = mongoose.model("User", userSchema)
const Video = mongoose.model("Video", VideoSchema)

module.exports = {
    User,
    Video
}