const express = require('express');
const router = express.Router();

const { jwtVerify } = require("./../utils/jwt")

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.use("/user", require("./user"))
router.use("/video", jwtVerify, require("./video"))

module.exports = router;
