const fs = require('fs')

const rfile=()=>{
    fs.readFile('./text.txt','utf-8',(err,data)=>{
        if(err) throw err
        console.log(data);
    })
}
rfile()