const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {isThereAlready} = require('../Utilities/isThereAlready.js');
const {addToDb} = require('../Utilities/addToDb.js');
const {Admin} = require('../db/index.js')
// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;
    console.log('username', username, 'password', password);
    const newAdmin = { username: username, password: password };

    if (await isThereAlready(username, password, Admin)) {
        return res.status(409).json({ message: "Admin already present in the database" });
    }
    try {
        const result = await addToDb(newAdmin,Admin)
        if (result.success) return res.status(201).json({ message: 'Admin created successfully' });
        return res.status(500).json({message:result.message});
    } catch (e) {
        console.error('Error creating admin:', e);
        return res.status(500).json({ message: 'Internal server error. Unable to create admin.' });
    }
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const {username,password} = req.body;
    
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;