
const {isThereAlready} = require('../Utilities/isThereAlready')
const {Admin} = require('../db/index')

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    
    const { username, password } = req.headers;
        
    // isThereAlready returns false if doc is not found
    const answer = await isThereAlready(username, password, Admin)
    if (!(answer)) {
        return res.status(409).json({
            success: false,
            message: "admin not found"
        });
    }
    next();
}

module.exports = adminMiddleware;