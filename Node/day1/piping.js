var fs = require('fs');

var readStream = fs.createReadStream("fileoutput.txt");

var writeStream = fs.createWriteStream("pipe.txt");

readStream.pipe(writeStream);

console.log("pipe operation complete")