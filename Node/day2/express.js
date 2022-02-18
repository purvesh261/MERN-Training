var express = require("express");

var app = express();

var fs = require("fs");

app.get("/users", function(req, res)
{
    fs.readFile("users.json", function(err, data){
        console.log(data);
        res.end(data);
    })
});

app.get("/:id", function(req, res)
{
    fs.readFile("users.json", function(err, data){
        let userData = JSON.parse(data);
        let user = userData[1]
        console.log("Data: ", user)
        res.end(JSON.stringify(user));
    })
})

var newUser = {
    "user3":
    {
        "id":3,
        "name":"Harsh",
        "phone":8546298659,
        "city":"Pune"
    }
}
app.post("/newUser", function(req, res){
    fs.readFile("users.json", function(err, data){
        data = JSON.parse(data);
        data["user3"] = newUser["user3"];
        console.log(data)
        res.end("data posted")
        fs.writeFile("users.json", JSON.stringify(data), function(err, data){
            if(err)
                throw err;
            console.log("data posted")
        })
    })
})

app.delete("/deleteUser/:id", function(req, res){
    fs.readFile("users.json", function(err, data){
        data = JSON.parse(data);
        delete data["user" + req.params.id]
        console.log(data)
        res.send("DELETED")
        // homework: delete from file
        fs.writeFile("users.json", JSON.stringify(data), function(err, data){
            if(err)
                throw err;
            console.log("data posted")
        })
    })
    
})

var server = app.listen(7001,() => {
    var host = server.address().address;
    var port = server.address().port;
    console.log("host:", host, "port:", port)
})