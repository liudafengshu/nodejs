// 创建处理错误的中间键
const { body } = require("express-validator");
const validate = require("./errorBack")

module.exports.register = validate([
    body("name")
        .notEmpty().withMessage("用户名不能为空").bail()
        .isLength({ min: 3, max: 18 }).withMessage("用户名长度应该在3～18位"),
    body("password")
        .notEmpty().withMessage("密码不能为空").bail()
        .isLength({ min: 3, max: 18 }).withMessage("密码长度应该在3～18位"),
    body("phone")
        .notEmpty().withMessage("用户名不能为空").bail()
        .isLength({ min: 11, max: 11 }).withMessage("电话号码长度应该为11位"),
    body("email")
        .notEmpty().withMessage("邮箱不能为空")
        .isEmail().withMessage("邮箱格式不正确")
])