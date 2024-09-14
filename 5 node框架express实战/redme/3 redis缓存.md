 
 ## 1 什么是redis
 适合大量数据高并发
 应用场景 如：
排行榜 计数器

## 2 安装redis
和mongodb一样，版本号第二位如果是奇数，就是开发版，偶数就是稳定版
官网
https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/install-redis-on-mac-os/
![alt text](image-87.png)

 ## 3 redis-cli 客户端连接
![alt text](image-88.png)
```shell
# 连接本地默认端口6379 redis-cli
redis-cli
# 连接127.0.0.1上 1234端口的redis
redis-cli -h 127.0.0.1 -p 1234

# 以下均为连接redis-cli后输入
# 查找当前有多少存储的键
key *
# 退出redis-cli
quit
# ping操作
ping
# 查看redis状态
info
# 查看服务器状态
info server

```
## 4 redis数据库
redis 默认有16个数据库，名字为0～15

使用redis-cli操作， 设置一个变量s1为1
![alt text](image-89.png)
这时候key * 就能查到s1了
![alt text](image-90.png)
切换到12号数据库
![alt text](image-91.png)
12号中没有s1了
![alt text](image-92.png)
将当前数据库中的s1移动到12号数据库
![alt text](image-93.png)
获取s2的值
![alt text](image-94.png)
晴空所有数据库中的所有数据
![alt text](image-95.png)
绝大部分情况我们只操作零号数据库就够了

## 5 redis 数据类型及操作命令
常见数据类型
![alt text](image-96.png)

redis可以使用任何二进制数据作为键，意思是任何值都可以作为键，键盘的最大值可以是512m（不重要）

## 6 redis列表操作
创建列表L1，并向L1列表中添加三个元素
![alt text](image-97.png)
获取列表L1从第1个到第三个的数据，列表下标从0开始，1是代表第二个
![alt text](image-98.png)
在88前面插入一个44
![alt text](image-100.png)
获取index为3的值
![alt text](image-101.png)
获取列表长度
![alt text](image-102.png)
获取列表第一个元素并删除它
![alt text](image-103.png)
获取最后一个元素并删除它
![alt text](image-104.png)

集合操作（Set）
添加一个名为s1的集合，创建了三个数据11，22，33
![alt text](image-106.png)
获取集合中所有数据
![alt text](image-107.png)
获取集合中有多少元素
![alt text](image-108.png)
随机从集合中获取一个值
![alt text](image-109.png)
随机从集合中获取多个值
![alt text](image-110.png)
删除集合中的一个成员
![alt text](image-111.png)
随机删除一个成员
![alt text](image-112.png)

有序集合的操作（Zset）
创建Zset z1，添加数据。两个一组，通过第一个字段排序
![alt text](image-113.png)
ZRANGE 集合名 开始位置 结束为止；通过这个规则获取集合中的数据，升序排列
![alt text](image-114.png)
ZREVRANGE 规则同上，不过是降序排列
![alt text](image-115.png)
获取升序排列后，从第index为3开始获取到为99的值
![alt text](image-116.png)
从小到大获取u2的排名，排名从零开始
![alt text](image-117.png)
从大到小获取u4的排名，排名从零开始
![alt text](image-118.png)
获取有序集合的成员数
![alt text](image-119.png)
增加某个数据的值，设置的第一个数据
![alt text](image-120.png)
删除某个值
![alt text](image-121.png)

redis通用操作
```shell
# 查看redis数据库里面有哪些数据
kye *
# 查看某个值的数据类型，例如查看s1的
TYPE s1
# 删除某个数据 例如删除s1
DEL s1
# 将s4重命名为s1
RENAME s4 s1
```

## 7 使用ndoejs操作redis
使用ioredis
new Redis 时不传参数，则默认连接127.0.0.1:6379
![alt text](image-122.png)
redis会默认开始安全模式不允许远程连接
设置一个登录需要的密码 ，例如设置为root
![alt text](image-123.png)
redis-cli 使用密码连接
![alt text](image-124.png)
nodejs中ioredis 使用密码连接redis
![alt text](image-125.png)
还需要在对redis进行一些配置才能连接
先安装vim
![alt text](image-126.png)
使用vim修改redis配置文件，
![alt text](image-127.png)
vim中 输入-h往左移动光标输入，l往右移动光标，g上，k下
esc退出编辑模式
i 输入
添加bind * 允许所有客户端访问
![alt text](image-128.png)
按esc 输入： 代表保存
配置使用密码登录，默认是注释掉的，重启就会失效
![alt text](image-129.png)
之后按下esc键，输入:wp保存并退出
使用新的redis配置文件重新启动redis
![alt text](image-130.png)
验证是否可以请求
![alt text](image-131.png)
成功之后再去nodejs中连接redis，就可以连接成功了
![alt text](image-132.png)

## 8 热度排名案例
![alt text](image-133.png)
![alt text](image-134.png)
![alt text](image-135.png)
![alt text](image-136.png)

## 9 通过redis做视频收藏，并且判断热门推荐
热度逻辑
![alt text](image-137.png)
连接redis
![alt text](image-138.png)
记录热度方法
![alt text](image-139.png)
获取前num个热门视频和对应热度
![alt text](image-140.png)

推荐一个非官方redis学习的中文网站
www.redis.com
![alt text](image-141.png)