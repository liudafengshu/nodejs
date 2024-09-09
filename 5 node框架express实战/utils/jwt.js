
const jwt = require("jsonwebtoken")
const { promisify } = require("util")
// 将回调函数写法变为promise，方便后面使用
const toJwt = promisify(jwt.sign)
const verify = promisify(jwt.verify)

const privateKey = "my private key"
// 创建token
module.exports.jwtSign = async (userInfo) => {
    return await toJwt({ ...userInfo }, privateKey, { expiresIn: 60 * 60 * 24 })  //设置过期时间为一天
}
// 解密token 
module.exports.jwtVerify = async (req, res, next) => {
    const authorization = req.headers.authorization
    const token = authorization ? authorization.split("Bearer ")[1] : null
    if (!token) res.status(402).send("token不存在")
    try {
        const userInfo = await verify(token, privateKey)
        next()
    } catch (err) {
        console.log(err)
        res.status(401).send("未登录或登录已过期，请重新登录")
    }
}

