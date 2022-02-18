var express = require("express");
var mongoClient = require('mongodb').MongoClient;
var fs = require("fs");
const bodyParser = require('body-parser')

var url = "mongodb://localhost:27017";

var app = express();
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())

app.get("/users", function(req, res)
{
    
});

app.get("/users/:id", function(req, res)
{
    mongoClient.connect(url, function(err, db)
    {
    if(err) throw err;
    var dbase = db.db("NewDatabase");
    console.log(req.params.id)
    dbase.collection("users").findOne({"id":Number(req.params.id)}, function(err, result)
        {
            if (err) throw err;
            res.send(result)
            db.close()
        })
    });
})

app.post("/newUser", function(req, res){
    mongoClient.connect(url, function(err, db)
    {
        if(err) throw err;
        var dbase = db.db("NewDatabase");
        var newUser = req.body;
        console.log(req.body)
        
        dbase.collection("users").insertOne(newUser, function(err, res)
        {
            if (err) throw err;
            console.log("New user inserted")
        })
    })
    res.send("New user inserted")
})

app.post("/updateUser/:id", function(req, res){
    mongoClient.connect(url, function(err, db)
    {
        if(err) throw err;
        var dbase = db.db("NewDatabase");
        newUser = {$set : req.body }
        dbase.collection("users").updateOne({"id": Number(req.params.id)},newUser, function(err, result){
            if (err) throw err;
            console.log("record updated", result)
        })
    })
    res.send("User data updated");
})

app.delete("/deleteUser/:id", function(req, res){
    mongoClient.connect(url, function(err, db)
    {
        if (err) throw err;
        var dbase = db.db('NewDatabase')
        var query = {"id": req.params.id};
        dbase.collection("users").deleteOne(query, function(err, result)
        {
            if (err) throw err;

            console.log("User deleted." , result)
        })
    })
    res.send("User deleted")
})

var server = app.listen(7001,() => {
    var host = server.address().address;
    var port = server.address().port;
    console.log("host:", host, "port:", port)
})