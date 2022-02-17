var fs = require("fs");

console.log("start reading asynchronously...")

fs.readFile('file1.txt', function(err,data)
{
    if(err)
    {
        throw err;
    }
    console.log("\nFileData: " + data.toString())
});

console.log("end reading ASYNCHRONOUSLY")

console.log("start reading SYNCHRONOUSLY...")

data = fs.readFileSync('file1.txt');
console.log("Data:", data.toString())
console.log("end reading SYNCHRONOUSLY")

