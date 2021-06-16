var express = require('express');
var app  = express();

//Cross Origin Resource Sharing
var cors = require('cors');
app.use(cors());

//API
// [GET, POST, PUT, DELETE]
app.get("/api/getUser", function(req,res){
    res.status(200).send({"message":"You are in /api/getUsers => Method: GET"})
})

app.post("/api/registerUser", function(req,res){
    res.status(200).send({"message":"You are in /api/getUsers => Method: POST"})
})

app.use('*', function(req,res){
    res.status(404).send({"message": "the route does not exist my friend!"})
})

//Server
var http = require('http');
var httpServer = http.createServer(app);
httpServer.listen(7500, function(){
    console.log(`Server is running on => port 7500`);
})