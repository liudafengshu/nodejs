const { User } = require("../model/index")
const { jwtSign } = require('../utils/jwt')
// 登录
module.exports.logIn = async (req, res) => {
    const dbBack = await User.findOne(req.body)
    const userInfo = dbBack.toJSON()
    const token = await jwtSign(userInfo)
    res.json({ ...userInfo, token })
}
// 注册
module.exports.registr = async (req, res) => {
    const user = new User(req.body)
    const dbBack = await user.save()
    res.json(dbBack)
}