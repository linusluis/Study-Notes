// fsPromises.opendir是fs 模块中的一个异步方法，用于打开一个目录以读取其内容。该方法
// 返回一个目录迭代器对象，可用于遍历目录中的文件和子目录。

// 下面是使用fsPromises.opendir的示例：
const fsPromises = require('fs/promises');
async function readDir(){
    try{
        const dir = await fsPromises.opendir('../fsPromises');
        for await(const dirent of dir){
            console.log(dirent.name);
        }
    } catch(err){
        console.log(err);
    }

}
readDir();
// 在上面的示例中，我们首先导入了 fs/promises 模块，然后定义了一个名为 readDir 的异步函数。在该函数中，
// 我们使用 await 关键字调用了 fsPromises.opendir 方法，将要读取的目录的路径作为参数传递给它。
// 然后，我们使用 for await...of 循环遍历了目录迭代器对象中的每个文件或子目录，并打印出它们的名称。

// 需要注意的是，fsPromises.opendir 方法只能用于 Node.js 的版本大于等于 v12.12.0。
// 如果您使用的是早期版本的 Node.js，则可以使用 fs.readdir 方法来读取目录中的内容，
// 但这个方法会返回一个包含所有文件和子目录名称的数组，
// 而不是一个目录迭代器对象。