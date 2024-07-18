 const fs = require('fs')

 const renamefile=()=>{
    fs.rename('./text.txt','text1.txt',(err)=>{
        if (err) throw err
        console.log('rename success');
    })
 }
 renamefile()