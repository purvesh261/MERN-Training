var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

// mongoClient.connect(url, function(err, db)
// {
//     if (err) throw err;
//     var dbase = db.db('NewDatabase')
//     var query = {"name": "new user 1"};
//     dbase.collection("users").deleteOne(query, function(err, res)
//     {
//         if (err) throw err;
//         console.log("Record has been deleted.")
//     })
// })

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