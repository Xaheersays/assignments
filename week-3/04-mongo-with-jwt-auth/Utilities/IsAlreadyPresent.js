const isAlreadyPresent = async(username,password,collection)=>{
    console.log('in isalready')
    const result = await collection.findOne({username:username,password:password})
    // returns true if user/recorder is not found
    if (!result)return true
    return false
}
module.exports = {isAlreadyPresent}