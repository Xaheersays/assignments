const getData = async (collection)=>{
    try{
        const data = await collection.find({})
        return data
    }
    catch(e){
        console.error('cant get data')
        return []
    }
    
}
module.exports = {getData}
