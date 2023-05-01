const fun = (a, b) => {
    return a + b;
}
const aValue = require("./03_模块导入与导出a");
console.log(aValue.aExports);
exports.fun = fun;