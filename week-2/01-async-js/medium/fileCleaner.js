const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname,'fileCleaner.txt');


fs.readFile(filePath,'utf8',(error,data)=>{
    if (error){
        console.log('cant read file',error)
        return
    }
    console.log('read file successfully')
    data = data.trim().split(" ")
    data = data.filter((word)=> word!==' ' &&  word !== '')
    // console.log(data)
    const filteredData = data.join(' ')

    fs.writeFile(filePath,filteredData,(errorInWriting)=>{
        if (errorInWriting){
            console.log("error while writing to file ",error)
        }
        console.log('done writing the removed spaces')
    })
})