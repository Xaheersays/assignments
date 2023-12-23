const isThereAlready = async (username,password,collection) =>{
    
    try{
        console.log('inside istherealready',username,password,collection)
        const result = await collection.findOne({username:username,password:password});
        console.log(result)
        if (!result)return false;
        return true;
    }catch(e){  
        console.log(e)
        return false;
    }
    

}

module.exports={isThereAlready};