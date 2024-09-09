const jwt = require('jsonwebtoken');
const { secretkey } = require("../configuration/jwtCongfig");

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    if(!authHeader){
        return res.status(401).json({message: "Unauthorised missing token"});
    }
    const [bearer,token] = authHeader.split(' ');
    if(bearer != "Bearer" || !token){
        return res.status(401).json({message: "Unauthorised or invalid token"})
    }
    jwt.verify(token, secretkey, (err, user) => {
        if (err) return res.status(403).json({ message: "Forbidden: Invalid token" });
        req.user = user;
        next();
    });
}
module.exports = {authenticateToken};