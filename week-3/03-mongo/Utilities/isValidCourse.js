const { Course } = require("../db/index")

const isValidCourse =async (courseId)=>{
    const doc = await Course.findOne({_id:courseId});
    console.log(doc)
    if (doc)return doc
    return null
}
module.exports ={isValidCourse}