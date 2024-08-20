const fs = require("fs");

fs.readFile("file.txt","utf-8",(err,data)=>{
    if(!err){
        let finalData = data;
        finalData=finalData.trim();
        finalData=finalData.replace(/\s+/g, ' ');
        fs.writeFile("file.txt",finalData,()=>{
            console.log("Data written successfully");
        })
    }
})