const jwt = require('jsonwebtoken')
const {JWTPASSWORD} = require('./jwtSignature.js')
const verifyToken = (token)=>{
    try{
        const decoded = jwt.verify(token,JWTPASSWORD)
        return true;

    }catch(e){
        console.error('the token is not valid ',e)
        return false
    }
}

module.exports = {verifyToken}