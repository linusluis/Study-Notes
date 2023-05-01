var fs = require('fs');
// 第一个参数：文件路径
// 第二个参数：文件内容
// 第三个参数：回调函数
// 成功：
// 文件写入成功
// error 是null
// 失败：
// 文件写入失败
// error就是错误对象
const content = `hello world`
fs.writeFile("./data/02_helloworld.md", content, (error) => {
    if (error) {
        console.log('写入失败了');
    } else {
        console.log('文件写入成功了');
    }
})