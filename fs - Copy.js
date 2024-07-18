// // step 1 : import file system mofule
const fs= require('fs')

const getfile=()=>{
    fs.writeFile('./text.txt' , 'my first pgm', (err)=>{
        if(err) throw err
        console.log('data written to the file');
    })
}
getfile()

// 
