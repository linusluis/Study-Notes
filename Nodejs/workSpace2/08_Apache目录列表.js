const fs = require('fs');
const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
    const url = req.url;
    // 其中template.html文件是copy过来的
    fs.readFile('./www/template.html', (err, data) => {
        if (err) {
            res.end('404 Not Found.');
            return;
        }
        res.end(data);
    })
    

})
server.listen(3000, () => {
    console.log('Server is running...');
})