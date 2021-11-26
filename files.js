const fs = require('fs')

fs.writeFileSync('file.txt','file make syncronous mode')
fs.writeFile('file2.txt','file make asyncronous',(err)=> {
    if (err)
        console.log(err)
        else {
            
        }
})

let information=fs.readFileSync('file.txt','utf-8')

console.log(information)

//fs.unlinkSync('file.txt')  //delete file