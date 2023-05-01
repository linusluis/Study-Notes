const http = require("http");
const fs = require("fs");

const server = http.createServer();
const wwwDir = "./www";
server.on("request", (req, res) => {
    const url = req.url;
    var filePath = '/index.html'
    if(url !== '/'){
        filePath = url;
    }
    fs.readFile(`${wwwDir}${filePath}`,(error,data)=>{
        if(error){
            res.end('404 Not Found');
        }
        res.end(data);
    })
})
server.listen(3000, () => {
    console.log("Server is running...");
})