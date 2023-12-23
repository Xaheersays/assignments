const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {isThereAlready} = require('../Utilities/isThereAlready.js');
const {addToDb} = require('../Utilities/addToDb.js');
const {Admin} = require('../db/index.js')
const {Course} =  require('../db/index.js')
const {getData} = require('../Utilities/getData.js')
// Admin Routes
// done
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;
    // console.log('username', username, 'password', password);
    const newAdmin = { username: username, password: password };

    if (await isThereAlready(username, password, Admin)) {
        return res.status(409).json({ message: "Admin already present in the database" });
    }
    const doc = new Admin(newAdmin);
    try {
        const result = await addToDb(doc)
        if (result.success) return res.status(201).json({ message: 'Admin created successfully' });
        return res.status(500).json({message:result.message});
    } catch (e) {
        console.error('Error creating admin:', e);
        return res.status(500).json({ message: 'Internal server error. Unable to create admin.' });
    }
});
// done
router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    // const {username,password} = req.headers;
    const {title,description,price,imageLink} = req.body
    const newCourse = {
        title:title,
        description:description,
        price:price,
        imageLink:imageLink,
        published:true

    }
    console.log(newCourse);
    const doc = new Course(newCourse);
    const result = await addToDb(doc);
    if (result.success){
        return res.status(201).json({
            message: 'Course created successfully', 
            courseId: doc._id
        })
    }
    return res.status(403).json({
        message:'could not add new course'
    })






});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const data  = await getData(Course)
    res.send(data)
});

module.exports = router;