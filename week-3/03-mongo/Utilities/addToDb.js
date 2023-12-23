const addToDb = async(doc)=>{
    // const doc = new collection(p);
    try{
        await doc.save();
        return {
            success:true,
            message:'document saved to db'
        }
    }catch(e){
        return {
            success:false,
            message:'document could not be saved due to internal error'
        }
    }
}

module.exports = {
    addToDb
}