const User = require('../model/users.model')

exports.test = (req, res) => res.send("this is test")

exports.createUser = (req, res) => 
{
    let user = new User({
        id:req.body.id,
        name:req.body.name,
        password:req.body.id.password
    })
    user.save(function(err){
        if (err)
        {
            return next(err);
        }
        res.send("New user inserted")
    })
}

exports.allUsers = (req, res) => 
{
    User.find(function(err, result)
    {
        if (err)
        {
            return next(err);
        }
        res.send(result)
    })
}

exports.userById = (req, res) =>
{
    var query = {id: req.params.id}
    User.find(query, function(err, result)
    {
        if (err)
        {
            return next(err);
        }
        res.send(result)
    })
}

exports.deleteUser = (req, res) => 
{
    User.deleteOne(req.params.id, function(err, result){
        if (err)
        {
            return next(err);
        }
        res.send(result);
    })
}

exports.update = (req, res) => 
{
    User.findOneAndUpdate({id:req.params.id}, req.body).then(function(result)
    {
        User.findOne({id:req.params.id}).then(function(result){
            res.send(result)
        })
    })
}