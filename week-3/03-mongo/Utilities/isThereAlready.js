const isThereAlready = async (username,password,collection) =>{
    console.log('inside already')
    try{
        const result = await collection.findOne({username:username,password:password});
        if (!result)return false;
        return true;
    }catch(e){  
        console.log(e)
        return false;
    }
    

}

module.exports={isThereAlready};