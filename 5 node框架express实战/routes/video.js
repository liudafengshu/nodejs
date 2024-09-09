var express = require('express');
const controller = require("./../controller/video")

var router = express.Router();

/* GET users listing. */
// 登录
router.post('/add', controller.add);
// 注册
router.get('/delete', controller.delete);

module.exports = router;