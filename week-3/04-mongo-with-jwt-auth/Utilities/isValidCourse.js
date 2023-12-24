const { Course } = require("../db/index")

const isValidCourse = async(courseId) =>{
    try{
        const data = await Course.findOne({_id:courseId})
        return data
    }
    catch(e){
        return  false
    }
}
module.exports = {isValidCourse}