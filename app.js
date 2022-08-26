const http = require('http')



const server = http.createServer(function (req,res){
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end('<h1>List of movies</h1></br><h4>Avengers</h4></br><h4>Game of Thrones</h4></br><h4>House of Dragon</h4></br><h4>Thor</h4>')
})

server.listen(3000,function(){
    console.log('server is running on port 3000');
})
