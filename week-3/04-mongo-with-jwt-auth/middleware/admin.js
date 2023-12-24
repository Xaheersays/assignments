const {verifyToken} = require('../Utilities/jwtVerification.js')
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    console.log('in autho')
   let token = req.headers.authorization
   console.log(token)
   token = token.split(' ')[1]
   console.log(token)
   if (! verifyToken(token)){
        return res.status(403).json({message:'wrong token cant verify'})
   }
   next()
}

module.exports = adminMiddleware;