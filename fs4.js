const fs = require('fs')

const deletef=()=>{
    fs.unlink('./text2.txt',(err)=>{
        if(err) throw err
        console.log('deleted success');

    })
}
deletef()