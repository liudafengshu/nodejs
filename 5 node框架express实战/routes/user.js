var express = require('express');
const controller = require("./../controller/user")

var router = express.Router();

/* GET users listing. */
// 登录
router.post('/logIn', controller.logIn);
// 注册
router.post('/registr', controller.registr);

module.exports = router;
