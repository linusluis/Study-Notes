console.log("当前用户的UID:",process.getuid);
console.log("当前用户所属的主要组的 GID:",process.getgid);

// 在windows操作系统中，每个用户都有一个唯一的安全标识符（SID），而不是像Linux
// 和Unix操作系统中那样使用数字的UID和GID。
// Windows上的文件和目录权限管理方式与Linux或Unix不同，因此无法直接使用fsPromises.chown()方法更改文件或目录的所有者。
// 如果您需要在Windows上更改文件或目录的权限，可以参考Window权限管理的相关文档。