const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
    const url = req.url;
    if (url === "/plain") {
        // text/plain 就是普通文本
        res.setHeader("Content-Type", "text/plain;charset=utf-8");
        res.end("hello 世界");
    } else if (url === "/html") {
        // 如果你发送的是html格式的字符串，则也要告诉浏览器我给你发送的是text/html格式的内容
        res.setHeader("Content-Type", "text/html;charset=utf-8");
        res.end("<h1>hello html<a href = ''>点我</a></h1>");
    }
})
server.listen(3000, () => {
    console.log("Server is running...");
})