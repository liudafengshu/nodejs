var express = require('express');
const controller = require("../controller/user")
const validator = require("./../middleware/validator/userValidator")

var router = express.Router();

/* GET users listing. */
// 登录
router.post('/logIn', controller.logIn);
// 注册,使用定义的validator.register中间键盘处理错误
router.post('/registr', validator.register, controller.registr);

module.exports = router;
