const express = require('express')

const server = express();

server.use(express.json());


server.get('/',function(req,res){
    res.json(movies)
})
server.post('/',function(req,res){
    movies.push(req.body)
    res.send('movie added')
})

const movies = [
    {
        "movie":'Avengers',
        "year":'2017'
    },
    {
        "movie":'Game of Thrones',
        "year":'2020'
    }
]

server.listen(3000,function(){
    console.log('server is running on port 3000');
})
