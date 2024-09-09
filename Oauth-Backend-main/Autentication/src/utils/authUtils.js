const jwt = require("jsonwebtoken");
const { secretkey } = require("../configuration/jwtCongfig"); // Corrected path

// Function to generate a JWT
function generateToken(user) {
    const payload = {
        id: user._id,
        email: user.email,
        role: user.role
    };
    return jwt.sign(payload, secretkey, { expiresIn: "1h" });
}

// Function to generate a refresh token
function generateRefreshToken(user) {
    const payload = {
        id: user._id,
        email: user.email,
        role: user.role
    };
    return jwt.sign(payload, secretkey, { expiresIn: "7h" });
}

// Function to verify a JWT
function verifyToken(token) {
    return jwt.verify(token, secretkey);
}

module.exports = { generateToken, generateRefreshToken, verifyToken };
