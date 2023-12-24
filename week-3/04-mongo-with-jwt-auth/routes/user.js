const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {isAlreadyPresent} = require('../Utilities/IsAlreadyPresent.js')
const { User, Course,ObjectId } = require("../db/index.js");
const { addToDb } = require("../Utilities/addToDb.js");
const { getSignature } = require("../Utilities/jwtSignature.js");
const { getData } = require("../Utilities/getData.js");
const {isValidCourse} = require('../Utilities/isValidCourse.js')
const {getUsersDoc} = require('../Utilities/getUserDoc.js')
const {decodeToken} = require('../Utilities/decodeToken.js')
// User Routes
router.post('/signup',async (req, res) => {
    // Implement user signup logic
    const {username,password} = req.body
    // returns true if user/recorder is not found
    if (! await isAlreadyPresent(username,password,User)){
        return res.status(409).json({message:'This User is already registered'})
    }
    const newUser = {username:username,password:password}
    const doc =  new User(newUser)
    const results = await addToDb(doc)
    if (! results.success)return res.send(500).json({message:'Internal Database Error'})
    return res.status(201).json({message:'User created successfully'})
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const {username,password} = req.body
    // console.log(username,password)
    if (await isAlreadyPresent(username,password,User)){
        return res.status(403).json({message:'User is not registered yet'})
    }
    const token = getSignature({username:username,password:password})
    return res.status(201).json({message:'signed in succesfully',token:token})
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const data = await getData(Course)
    return res.status(200).json({courses:data})
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseID  = new ObjectId(req.params.courseId);
    const course = await isValidCourse(courseID)
    // console.log(course)
    if (!course){
        return res.status(403).json({message:"no course matching with this Id"})
    }
    let token = req.headers.authorization
    token = token.split(' ')[1]
    const result = decodeToken(token)
    // console.log(result)
    if (! result)return res.status(403).json({message:'cant find user'})
    const {username,password} = result
    const doc  = await getUsersDoc(username,password)
    doc.purchased.push(course)
    const resutlts = await addToDb(doc)
    if (resutlts.success){
        return res.status(200).json({message:'course has been purchased successfully'})
    }
    return res.status(403).json({message:'couldnt purchase the course,something went wrong'})
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    let token = req.headers.authorization
    token = token.split(' ')[1]
    const result = decodeToken(token)
    if (!result)return res.send('wrong token')
    const {username,password}= result
    const doc  = await getUsersDoc(username,password)
    const purchased = doc.purchased
    if (!purchased)return res.status(403).json({
        message:'cant fetch courses of user due to internal erros'
    })
    return res.status(200).json({purchasedCourses:purchased})

});

module.exports = router