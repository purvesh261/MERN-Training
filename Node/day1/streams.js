var fs = require("fs")
var data = "";

var readStream = fs.createReadStream("fileoutput.txt")

readStream.on('data', function(info){
    data += info;
})

readStream.on('end', function(){
    console.log(data);
})

readStream.on('error', function(){
    console.log(error.stack);
})

data= "this is the write stream data";

var writeStream = fs.createWriteStream('StreamWrite.txt');
writeStream.write(data);

writeStream.end();

writeStream.on('finish', function() {
    console.log("write operation complete");
})
