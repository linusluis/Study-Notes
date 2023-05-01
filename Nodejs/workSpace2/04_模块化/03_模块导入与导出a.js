// require 方法有两个作用：
// 1. 加载文件模块并执行里面的代码
// 2. 拿到被加载文件模块导出的接口对象

// 在每个文件模块中都提供了一个对象：exports
// exports 默认是一个空对象
// 你要做的就是把所有需要被外部访问的成员挂在到这个exports 对象中
exports.aExports = 13;
const bExports = require("./04_模块导入与导出b");
const total = bExports.fun(12, 24);
console.log(total);
