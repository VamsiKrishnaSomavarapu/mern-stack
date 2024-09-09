const bcrypt = require("bcrypt");
const User = require("../models/User");
const { generateToken } = require("../utils/authUtils");

async function login(req, res) {
  try {
    const { email, password } = req.body;
    // console.log(`Received login request for email: ${email}`);

    const user = await User.findOne({ email });
    // console.log(`User found: ${user}`);

    if (!user) {
    //   console.error("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    // console.log(`Password valid: ${isPasswordValid}`);

    if (!isPasswordValid) {
      console.error("Invalid password");
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = generateToken(user);
    // console.log(`Generated token: ${token}`);

    res.status(200).json({ user, token });
  } catch (error) {
    console.error(`Error during login: ${error.message}`);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { login };
