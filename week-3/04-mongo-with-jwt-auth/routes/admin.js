const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {isAlreadyPresent} = require('../Utilities/IsAlreadyPresent.js');
const { Admin, Course } = require("../db/index.js");
const { addToDb } = require("../Utilities/addToDb.js");
const { getSignature } = require("../Utilities/jwtSignature.js");

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const {username,password} = req.body
    // returns true if user/recorder is not found
    if (! await isAlreadyPresent(username,password,Admin)){
        return res.status(409).json({message:'This admin is already registered'})
    }
    const newAdmin = {username:username,password:password}
    const doc =  new Admin(newAdmin)
    const results = await addToDb(doc)
    if (! results.success)return res.send(500).json({message:'Internal Database Error'})
    return res.status(201).json({message:'Admin created successfully'})
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const {username,password} = req.body
    // console.log(username,password)
    if (await isAlreadyPresent(username,password,Admin)){
        return res.status(403).json({message:'admin is not registered yet'})
    }
    const token = getSignature({username:username,password:password})
    return res.status(201).json({message:'signed in succesfully',token:token})

});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const {title,description,price,imageLink} = req.body
    const doc = new Course({title:title,description:description,price:price,imageLink:imageLink})
    const results = await addToDb(doc)
    if (! results.success){
        return res.status(403).json({message:'couldnt saved to db due to internal errors'})
    }
    return res.status(201).json({
        message:'new course has been added successfully',
        courseId:doc._id
    })
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic

});

module.exports = router;