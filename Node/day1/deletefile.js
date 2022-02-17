var fs = require("fs");

var file = "file2.txt";

fs.unlink(file, err => {
    console.log("File deleted!")
})