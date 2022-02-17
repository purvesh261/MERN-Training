var fs = require("fs");

var content = "this is the content of the new file\nI am writing in this new file\nusing the writeFile method"

fs.writeFile('fileoutput.txt', content, function(err)
{
    if (err)
    {
        throw err;
    }
    console.log("Writing operation complete.")
})

fs.appendFile('fileoutput.txt', '\nthis is appended data', function(err, data){
    if (err)
    {
        throw err;
    }
    console.log("Append operation complete!")
})

fs.appendFileSync('fileoutput.txt', '\nthis is synchronously appended data')