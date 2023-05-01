
const fs = require("fs");
const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
    const url = req.url;
    console.log(url);
    if (url === "/sunset") {
        fs.readFile("./data/03_sunset.jpg", (error, data) => {
            if (error) {
                res.setHeader("Content-Type", "text/plain;charset=utf-8");
                res.end("读取文件失败");
            } else {
                // data默认是二进制数据，可以通过.toString转为咱们能识别的字符串
                // res.end() 支持两种数据类型，一种是二进制，一种是字符串
                // 图片就不需要指定编码了，因为我们常说的编码一般指的是：字符编码
                res.setHeader("Content-Type", "image/jpeg;charset=utf-8");
                res.end(data);
            }
        });
    }
    else if (url === '/index') {
        fs.readFile("./data/04_index.html", (error, data) => {
            if (error) {
                res.setHeader("Content-Type", "text/plain;charset=utf-8");
                res.end("读取文件失败");
            } else {
                res.setHeader("Content-Type", "text-plain;charset=utf-8");
                res.end(data);
            }
        })
    }
})
server.listen(3000, () => {
    console.log("Server is running...");
})