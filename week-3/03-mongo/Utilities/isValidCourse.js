const { Course } = require("../db/index")

const isValidCourse =async (courseId)=>{
    const doc = await Course.findOne({_id:courseId});
    if (doc)return doc
    return null
}
module.exports ={isValidCourse}