var express = require('express');
var router = express.Router();

/* GET users listing. */
// 登录
router.get('/logIn', function (req, res, next) {
  res.send('登录');
});
// 注册
router.get('/registr', function (req, res, next) {
  res.send('注册');
});

module.exports = router;
