const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");
const {isThereAlready} = require('../Utilities/isThereAlready')
const {addToDb} = require('../Utilities/addToDb')
const {getData} = require('../Utilities/getData');
const { getUsersDoc } = require("../Utilities/getUsersDoc");
const {ObjectId} =  require('../db/index')
const {isValidCourse} = require('../Utilities/isValidCourse')
// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const { username, password } = req.body;
    console.log(username,password)
    const newUser = { username: username, password: password ,purchased : [] };
    if ( await isThereAlready(username, password, User)) {
        return res.status(409).json({ message: "User already present in the database" });
    }
    const doc = new User(newUser);
    try {
        const result = await addToDb(doc)
        if (result.success) return res.status(201).json({ message: 'User created successfully' });
        return res.status(500).json({message:result.message});
    } catch (e) {
        console.error('Error creating admin:', e);
        return res.status(500).json({ message: 'Internal server error. Unable to create User.' });
    }

});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const data  = await getData(Course)
    res.send({courses:data})

});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const {username,password} = req.headers
    const courseID  = new ObjectId(req.params.courseId);
    const course = await isValidCourse(courseID)
    if (!course){
        return res.status(403).json({message:"no course matching with this Id"})
    }
    const doc  = await getUsersDoc(username,password)
    // we can add a check that user can purchase one only but thats okay for now 
    doc.purchased.push(course)

    const resutlts = await addToDb(doc)
    if (resutlts.success){
        return res.status(200).json({message:'course has been purchased successfully'})
    }
    return res.status(403).json({message:'couldnt purchase the course,something went wrong'})
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    // get purchased courses of a paricular user 
    //  so i can get all pushadsed from doc
    const {username,password} = req.headers
    const doc  = await getUsersDoc(username,password)
    const purchased = doc.purchased
    if (!purchased)return res.status(403).json({
        message:'cant fetch courses of user due to internal erros'
    })
    return res.status(200).json({purchasedCourses:purchased})


});

module.exports = router