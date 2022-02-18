var mongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017";

mongoClient.connect(url, function(err, db)
{
    if(err) throw err;
    var dbase = db.db("NewDatabase");
    var newUser = {"id":1523, "name": "new user 1", "password": "abcd1234"}
    dbase.collection("users").insertOne(newUser, function(err, res)
    {
        if (err) throw err;
        console.log("New user inserted")
    })

    // homework insert many

    var newUsers = [{"id":5658, "name": "new user 2", "password": "wfoe4958"},
                    {"id":2459, "name": "new user 3", "password": "iger9539"},
                    {"id":7388, "name": "new user 4", "password": "ef2kf9rf"},
                    {"id":1003, "name": "new user 5", "password": "d93mfy73"},]
    dbase.collection("users").insertMany(newUsers, function(err, res)
    {
        if (err) throw err;
        console.log("Multiple users inserted")
    })
})

mongoClient.connect(url, function(err, db)
{
    if(err) throw err;
    var dbase = db.db("NewDatabase");
    dbase.collection("users").find({}).toArray(function(err, res)
    {
        if (err) throw err;
        console.log(res);
        db.close()
    })
})