const fs = require("fs");


fs.readFile("file.txt","utf-8",(err,data)=>{
    if(!err){
        const finalData= data;
        fs.writeFile("newfile.txt",finalData,(err)=>{
            if(err){
                console.log(err);
            }else{
                console.log("Data written successfully");
            }
        })
    }
})