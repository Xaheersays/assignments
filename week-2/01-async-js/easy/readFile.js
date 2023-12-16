const { error } = require('console')
const fs = require('fs');
const path = require('path');  
const filePath = path.join(__dirname, 'read.txt');

// read file
fs.readFile(filePath,'utf8',(error,data)=>{
    if (error){
        console.log('cant read file due to error',error)
        return 
    }
    console.log("here is content of your file")
    console.log('\n')
    console.log(data);
    console.log("done reading the file")
    return
})

// do expensive operations
for (let i =0 ;i<1000000000;i++){
    //  a = 0
}
for (let i=0;i<1000000000;i++){

}
console.log('done expensive opreations')