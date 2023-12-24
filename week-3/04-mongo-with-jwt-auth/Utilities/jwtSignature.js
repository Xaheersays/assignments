const  jwt  = require("jsonwebtoken");
const  JWTPASSWORD = '2232323';
const getSignature = (obj) =>{
    return jwt.sign(obj,JWTPASSWORD)
}
module.exports={JWTPASSWORD,getSignature}


