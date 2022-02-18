var mongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017";

// create db and collection
// mongoClient.connect(url, function(err, db)
// {
//     if(err) throw err;
//     var dbase = db.db("NewDatabase");
//     dbase.createCollection("users", function(err, res)
//     {
//         if (err) throw err;
//         console.log("Collection created");
//         db.close()
//     })
// })


// insert document
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

// read documents
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

// homework findOne, update
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

mongoClient.connect(url, function(err, db)
{
    if(err) throw err;
    var dbase = db.db("NewDatabase");
    dbase.collection("users").updateOne({"id":2459},{$set:{"name":"updated user"}}, function(err, res){
        if (err) throw err;
        console.log("record updated")
    })
})

mongoClient.connect(url, function(err, db)
{
    if (err) throw err;
    var dbase = db.db('NewDatabase')
    var query = {"name": "new user 1"};
    dbase.collection("users").deleteOne(query, function(err, res)
    {
        if (err) throw err;
        console.log("Record has been deleted.")
    })
})

// homework: delete many
mongoClient.connect(url, function(err, db)
{
    if (err) throw err;
    var dbase = db.db('NewDatabase')
    var query = {"id": {$gt:5000}};
    dbase.collection("users").deleteMany(query, function(err, res)
    {
        if (err) throw err;
        console.log("Multiple Records deleted.")
    })
})

// homework: create API using mongoDB