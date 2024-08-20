const fs = require("fs");

function readFile(){
    fs.readFile("file.txt","utf-8",(err,data)=>{
        if(!err){
            console.log("DATA : ",data);
        }
    })
}

readFile();

let sum=0;
for(let i=0;i<10000000000;i++){
    sum+=i;
}
console.log("Value of sum  : ",sum);