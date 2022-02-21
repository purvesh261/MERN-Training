var express = require('express');
var app = express();

var Router1 = require('./router.js');

app.use('/', Router1);

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})