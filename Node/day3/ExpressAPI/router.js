var express = require("express");
var router = express.Router();

router.get('/get', function(req, res) {
    res.send("hello");
})

router.post('/post', function(req, res){
    res.send("post route");
})

router.delete('/delete', function(req, res){
    res.send("Data deleted")
})

module.exports = router;