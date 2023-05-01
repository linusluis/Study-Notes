// 浏览器中的javaScript是没有文件操作能力的。但是Node中的javaScript具有文件操作的能力。


// fs是file system 的简写，就是文件系统的意思。
// 在node中如果想进行文件操作，就必须引入fs这个核心模块
// 在fs这个核心模块中，就提供了所有的文件操作相关的API
// 例如： fs.readFile就是用来读取文件的

// 1. 使用require方法加载fs核心模块
var fs = require('fs');

// 2. 读取文件
// 第一个参数就是要读取的文件路径
// 第二个参数是一个回调函数
// 成功
//  data 数据
//  error null
// 失败
//  data undefind 没有数据
//  error 错误对象
fs.readFile("./data/01_.txt", (error, data) => {
    // 文件中存储的其实都是二进制数据0 1
    // 这里为什么看到的不是0和1呢？ 原因是二进制转为16进制了
    // 但是无论是二进制还是十六进制，人类都不认识。
    // 所以我们可以通过toString方法把其转为我们能认识的字符
    if (error) {
        console.log('读取文件失败了！');
    } else {
        console.log(data);// <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
        console.log(data.toString());// hello world
    }
})