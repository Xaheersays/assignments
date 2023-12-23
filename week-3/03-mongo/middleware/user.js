const { User } = require("../db/index");
const {isThereAlready} = require('../Utilities/isThereAlready')

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const { username, password } = req.headers;
    // isThereAlready returns false if doc is not found
    const answer = await isThereAlready(username, password, User)
    // console.log(answer)
    if (!(answer)) {
        return res.status(409).json({
            success: false,
            message: "User not found"
        });
    }
    next();
}

module.exports = userMiddleware;