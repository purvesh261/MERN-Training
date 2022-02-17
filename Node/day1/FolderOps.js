var fs = require("fs");

// fs.mkdir("./NewFolderNode", function(err){
//     if(err)
//     {
//         throw err;
//     }
//     console.log("Directory created.");
// })

fs.access('./NewFolderNode', function(err)
{
    if (err)
    {
        throw err;
    }
    console.log("directory accessed");
})

const fileArray = fs.readdir("./", function(err,data)
{
    if(err)
    {
        console.log(err);
    }
    
    console.log(data)
})
