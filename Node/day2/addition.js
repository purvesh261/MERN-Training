const express = require("express");
const { appendFile } = require("fs");
const bodyParser = require('body-parser')

var app = express();
app.use(bodyParser.urlencoded({
    extended:true
}))

app.get("/", function(req, res)
{
    res.sendFile("C:/Users/Hp/Training/Node/day2/form.html");
});

app.post("/", function(req, res)
{
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("Addition: " + result)
});

app.listen(7001,() => {
    console.log("App is running on port 7001...")
})