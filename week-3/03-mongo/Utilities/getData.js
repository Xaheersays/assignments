const getData = async (collection)=>{
    try{
        const data = await collection.find({})
        return data;

    }catch(e){
        console.log('error while fetching from db',e)
        return []
    }
    
}
module.exports = {getData};