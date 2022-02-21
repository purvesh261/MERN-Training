const config = require('./config.js');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const users  = require('./routes/users.route');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use('/users', users);

mongoose
    .connect(config.mongoURL)
    .then(console.log("Database connected."))
    .catch(err => console.log(err));

mongoose.Promise = global.Promise;

let db = mongoose.connection;

db.on("error", console.error.bind(console, 'Connection Error'))

app.listen(config.serverPort, function(){
    console.log(`Server is running on port ${config.serverPort}...`)
})