var mongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017";

mongoClient.connect(url, function(err, db)
{
    if(err) throw err;
    var dbase = db.db("NewDatabase");
    dbase.collection("users").updateOne({"id":2459},{$set:{"name":"updated user"}}, function(err, res){
        if (err) throw err;
        console.log("record updated")
    })
})