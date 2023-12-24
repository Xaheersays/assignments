const jwt = require('jsonwebtoken')
const decodeToken = (token)=>{
    try{
        const decoded = jwt.decode(token)
         const {username,password} = decoded
         console.log(decoded)
         return  {username:username,password:password}
    }
    catch(e){
        return null
    }   
}
module.exports ={decodeToken}