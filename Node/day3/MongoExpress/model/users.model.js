const mongoose = require('mongoose');

const Schema = mongoose.Schema;
let usersSchema = new Schema({
    id:{type:Number},
    name:{type:String},
    password:{type:String}
});

module.exports = mongoose.model('newUser', usersSchema);