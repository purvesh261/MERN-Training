var mongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017";

mongoClient.connect(url, function(err, db)
{
    if(err) throw err;
    var dbase = db.db("NewDatabase");
    dbase.collection("users").findOne({"name":"new user 2"}, function(err, res)
    {
        if (err) throw err;
        console.log(res);
        db.close()
    })
})