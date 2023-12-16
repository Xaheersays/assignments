const { error } = require('console')
const fs = require('fs');
const path = require('path');  
const filePath = path.join(__dirname, 'write.txt');

const content = '\ncome into the unknown \n dude,you can do that too \n remember stay out of fire'

fs.appendFile(filePath,content,(error)=>{
    if (error){
        console.log("error occured : ",error)
    }
    console.log("content has been appended successfully")
    fs.readFile(filePath,'utf8',(error,data)=>{
        if (error){
            console.log("error has been occured",error)
            return
        }
        console.log("your content of file is  : ",'\n')
        console.log(data)
        console.log("\ndone reading the file")
        return 
    })
    return 
})
console.log('done')

