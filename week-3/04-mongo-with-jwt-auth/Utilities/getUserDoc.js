const { User } = require("../db/index")

const getUsersDoc = async (username,password)=>{
    try{
        const doc = await User.findOne({username:username,password:password})
        return doc
    }
    catch(e){
        return null
    }
}

module.exports = {getUsersDoc}