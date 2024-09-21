 ## 1 nest框架的介绍与运行
 ![alt text](image.png)
 ![alt text](image-1.png)

 ![alt text](image-2.png)

 ## 2 nest 模块概念与应用

 ## 3 nest-cli创建基础代码
命令行创建模块，自动引入
![alt text](image-4.png)
使用命令行创建controller和service
![alt text](image-5.png)
直接生成一个支持增删改查的模块，包含上面创建的全部内容
![alt text](image-7.png)

## 4 nest集成swagger
![alt text](image-47.png)
![alt text](image-8.png)
![alt text](image-9.png)
@body,参数装饰器，将这个post请求中body参数全部给到createuserDto
![alt text](image-11.png)
通过入参类型在ts中提示参数
![alt text](image-10.png)
使用ApiProperty用来在swagger中提示参数的含义
![alt text](image-13.png)
 
 ## 5 nest中的装饰器
  nest中提供的的功能基本都以装饰的形式使用
 充当路由
 ![alt text](image-14.png)

 集成swagger

 接收参数
 ![alt text](image-15.png)
 ![alt text](image-16.png)

## 6 provider 与依赖注入
![alt text](image-18.png)
一个类通过依赖注入另一个类后可以直接使用
![alt text](image-19.png)
![alt text](image-20.png)

## 7 nest 模版代码梳理
main.js
![alt text](image-22.png)
app.module.js
![alt text](image-23.png)

其他
![alt text](image-25.png)
![alt text](image-26.png)
![alt text](image-27.png)

## 8 nest 集成mongooose
![alt text](image-28.png)
![alt text](image-29.png)
![alt text](image-30.png)
导出类型
![alt text](image-32.png)
导出schema
![alt text](image-33.png)

## 9 nest 中的增删改查操作

user.module.ts
![alt text](image-37.png)
![alt text](image-38.png)
![alt text](image-39.png)
user.service.ts
![alt text](image-36.png)
![alt text](image-35.png)
入库
![alt text](image-40.png)
查询所有数据
![alt text](image-41.png)
查询一条数据
![alt text](image-42.png)
修改数据
![alt text](image-44.png)
![alt text](image-45.png)
删除数据
![alt text](image-46.png)


