const mongoose = require("mongoose");
const md5 = require('md5');

const userSchema = new mongoose.Schema({
    // 账户名
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 18,
    },
    // 密码
    password: {
        type: String,
        required: true,
        set: value => md5(value),  //使用md5对存入的数据加密
        select: false,  //查询时不返回该条信息
    },
    // 头像
    imgUrl: {
        type: String,
        default: null
    },
    // 手机号
    phone: {
        type: String,
        required: true,
        minLength: 11,
        maxLength: 11,
    },
    // 邮箱
    email: {
        type: String,
        require: true,
    },
    // 创建时间
    createAt: {
        type: Date,
        default: Date.now()
    },
    //修改时间
    updateAt: {
        type: Date,
        default: Date.now()
    }

});

module.exports = userSchema
