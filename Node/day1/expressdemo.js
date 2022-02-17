var express = require("express");

var app = express();

var fs = require("fs");

app.get("/listUsers", function(req, res)
{
    fs.readFile("users.json", function(err, data){
        console.log(data);
        res.end(data);
    })
});

var server = app.listen(7001,() => {
    var host = server.address().address;
    var port = server.address().port;
    console.log("host:", host, "port:", port)
})