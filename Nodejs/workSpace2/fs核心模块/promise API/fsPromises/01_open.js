// fsPromises.open()是Node.js文件系统模块中的一个函数，用于以异步方式打开文件并返回一个文件描述符。
// 以下是它的基本语法是：
// const fsPromises  = require('fs').promises;
// fsPromises.open(path,flags[,mode])
// .then(fileHandler =>{
    // 文件处理代码
// }).catch(error=>{
    // 错误处理代码
// })

// 其中，path是要打开的文件路径，flags是打开文件的标志位，可以使用以下之一或多个组合：
// r:只读模式（默认值）
// w:写入模式，如果文件不存在则创建文件；如果文件存在则截断文件
// a:追加模式，如果文件不存在则创建文件。
// x:排他性新建文件模式，如果文件已经存在则出错。

// node是一个可选参数，当文件被创建时设置文件的权限，默认值为0o666
// fsPromises.open()返回一个Promise对象，该对象解析为表示打开文件的文件句柄（file handle）对象

//例如下面的代码将以只读模式打开名为02_helloworld.md的文件，并在控制台输出文件内容。
const fsPromises = require("fs").promises;
fsPromises
  .open("../../../data/02_helloworld.md", "r")
  .then((fileHandler) => fileHandler.readFile())
  .then((data) => {
    console.log(data.toString());
  })
  .catch((error) => {
    console.log(`Got error: ${error.message}`);
  });

  // 注意,readFile()方法也返回一个Promise对象，因此我们需要在then()方法中使用另一个Promise链来获取文件内容并输出。
