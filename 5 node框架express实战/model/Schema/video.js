const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
    // 账户名
    name: {
        type: String,
        required: true,
        trim: true,
    },
    // 视频路径
    url: {
        type: String,
        require: true
    },
});

module.exports = videoSchema
