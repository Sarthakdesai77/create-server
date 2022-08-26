const http = require('http')



const server = http.createServer(function (req,res){
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end('<h1>Hello from server</h1>')
})

server.listen(3000,function(){
    console.log('server is running on port 3000');
})
