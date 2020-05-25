
//$ npm install express --save
//npm install -g nodemon

var express = require("express");
const app = express();

app.get("/",function(req,res){
    //res.sendFile(__dirname+"/paginas/index.html");
    res.send("Seja bem vindo..5");
});

//abertura do servidor
app.listen(8081,function(){

    console.log("servidor rodando ..");
});