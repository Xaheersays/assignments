const { User } = require("../db/index");

const getUsersDoc = async(username,password)=>{
    const doc = await User.findOne({username:username,password:password})
    if (doc) return doc
    return null;
}
module.exports = {getUsersDoc};