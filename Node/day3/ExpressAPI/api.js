var express = require('express');
var app = express()

app.get('/', function(req, res) {
    res.send("Hello")
})

app.listen(5000, function(){
    console.log("Server is running on port 5000...")
})