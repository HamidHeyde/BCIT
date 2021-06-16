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

//FrontEnd
var path = require('path');
app.use('/',express.static(path.join(__dirname,'src')));

//404
app.use('*', function(req,res){
    res.status(404).send({"message": "the route does not exist my friend!"})
})

//Server
var PORT = process.env.PORT || 7500;
var http = require('http');
var httpServer = http.createServer(app);
httpServer.listen(PORT, function(){
    console.log(`Server is running on => port ${PORT}`);
})