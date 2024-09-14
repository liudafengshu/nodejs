## 1云服务器购买与环境搭建
购买云服务器
安装linux版nodejs
安装linux版mongodb
安装linux版redis

## 2 nginx 介绍与安装
![alt text](image-142.png)
![alt text](image-143.png)
![alt text](image-144.png)
安装
![alt text](image-145.png)

nginx -v 查看版本

文件位置，一般不要修改
/usr/share/nginx/

配置文件位置：
/usr/share/etc/nginx/nginx.conf

日志位置：
/usr/share/etc/nginx/var/log/nginx/
access.log记录每一次请求日志
error.log记录错误日志
![alt text](image-146.png)

所有的http服务器占用的都是80端口
查看80端口的占用情况
![alt text](image-147.png)
ifconfig 查看本机ip地址
阿里云ifconfig查看到的是内网ip，需要公网ip才可以访问
![alt text](image-148.png)
![alt text](image-149.png)
通过公网ip访问
![alt text](image-150.png)

## 3nginx工作模型与常用命令
![alt text](image-151.png)
启动nginx与停止nginx
```shell
# 启动
nginx
# 停止 stop，立即停止，杀死所有子进程
nginx -s stop
# 第二种停止nginx方式，
# quit 优雅停止，子进程工作执行结束后停止，此时不接受新请求
# 对用户更友好，建议使用
nginx -s quit
```
![alt text](image-152.png)

更新nginx的log记录文件，单纯给log文件改名创建log文件，log还会写入以前的文件，因为nginx按照启动时的磁盘位置寻找文件，而不是按照文件名
![alt text](image-153.png)

ll可以查看当前文件夹下的文件详情
![alt text](image-154.png)

检查nginx配置文件是否有错误
![alt text](image-156.png)
重新加载nginx配置文件
![alt text](image-155.png)

## 4 nginx配置项解析
![alt text](image-157.png)
![alt text](image-158.png)

## 5 nginx 反向代理
通过filezilla上传文件到服务器
![alt text](image-159.png)
ssh连接方式使用22端口连接
![alt text](image-160.png)
云服务默认只允许开放80端口，其他端口允许访问需要手动去安全组中添加
![alt text](image-161.png)
将请求反向代理到3000端口
![alt text](image-163.png)
vim展示行号
![alt text](image-164.png)

反向代理
![alt text](image-165.png)

## 6 项目部署与域名解析

## 7 配置https安全协议
![alt text](image-166.png)
![alt text](image-167.png)
签发成功后选择nginx的证书下载，上传到服务器
![alt text](image-168.png)
修改配置
![alt text](image-173.png)
修改default，default 被引入到的nginx.conf
![alt text](image-170.png)
![alt text](image-171.png)
nginx -t 检查配置文件
nginx -s reload 重新加载配置文件
现在就需要通过https请求了
![alt text](image-172.png)


## 发布npm包
设置npm镜像源为官方
本地登录npm
![alt text](image-174.png)
name不能在npm存在
每次更新必须更新版本号
![alt text](image-175.png)
使用命令更新版本号
![alt text](image-176.png)
![alt text](image-177.png)
发布包
![alt text](image-178.png)