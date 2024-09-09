var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/user');
const router = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// 日志中间键 dev模式
app.use(logger('dev'));
// 解析json类型数据
app.use(express.json());
// 解析urlencoded类型数据
app.use(express.urlencoded({ extended: false }));
// cookie签名中间键，防止cookie被篡改，增加安全性
app.use(cookieParser());
// 静态文件到public
app.use(express.static(path.join(__dirname, 'public')));

// 注册路由
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// 设置基础路由
app.use("/api/v1", router)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  // next(createError(404));
  res.status(404).send("没有这个请求")
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
