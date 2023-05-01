var http = require("http");
const server = http.createServer();

// request请求事件处理函数，需要接受两个参数
// Request 请求对象
    // 请求对象可以用来获取客户端的一些请求信息，例如请求路径
// Response 响应对象
    // 响应对象可以用来给客户端发送响应消息
server.on("request",(request,response)=>{
    console.log("收到客户端请求了，请求路径是"+request.url);

    // response 对象有一个方法：write可以用来给客户端发送响应数据。
    // write 可以使用多次，但是最后一定要使用end来结束响应，否则客户端会一直等待。

    // 响应内容只能是字符串或者二进制数据。
    // 数字 对象 数组 布尔值都不行
    if(request.url === "/helloworld"){
        response.write("hello");
        response.write("world");
    }else if(request.url === "/hellonodejs"){
        response.write("hello");
        response.write("nodejs");
    }
    response.end();
})
server.listen(3000,()=>{
    console.log("服务器启动成功了，可以通过http://127.0.0.1:3000/来访问");
})
