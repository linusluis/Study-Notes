const fs = require("fs").promises;

// 使用数字权限标志设置文件权限
// fs.chmod("../../../data/07_chmodText.txt", 0o744)
//   .then(() => console.log("File permissions updated successfully"))
//   .catch((err) => console.log(err));

// 使用八进制字符串权限标志设置文件权限，
// 其实就是将八进制数字加上引号，变成字符串形式，前面可以带0也可以不带0
// fs.chmod("../../../data/07_chmodText.txt", "0644")
//   .then(() => console.log("File permissions updated successfully"))
//   .catch((err) => console.log(err));

// 使用对象表示权限设置文件权限
const permissions = {
  owner:{
    read:true,
    write:false,
    execute:false
  },
  group:{
    read:true,
    write:false,
    execute:true
  },
  others:{
    read:true,
    write:false,
    execute:true
  }
}
// 这里注意parseInt的第二个参数，表示将字符串以什么进制表示，而不是最终parseInt的结果是几进制的。如果不指定，默认是十进制的。
const mode = parseInt(`${Number(permissions.owner.read)}${Number(permissions.owner.write)}${Number(permissions.owner.execute)}`+
`${Number(permissions.group.read)}${Number(permissions.group.write)}${Number(permissions.group.execute)}`+
`${Number(permissions.others.read)}${Number(permissions.others.write)}${Number(permissions.others.execute)}`,2);
console.log(mode); // 301
fs.chmod("../../../data/07_chmodText.txt", mode)
  .then(() => console.log("File permissions updated successfully"))
  .catch((err) => console.log(err));