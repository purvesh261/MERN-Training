var http = require('http'); 

http.createServer(function (req, res) {  
    res.write("Hello World. ");
    console.log(5+5)
    res.end()
}).listen(5000, () => {
    console.log('Node Server is running.. ')
});

