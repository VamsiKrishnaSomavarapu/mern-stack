const User = require("../models/User");
const bcrypt = require("bcrypt");
async function signupUser(req, res) {
    try {
      // Destructure the required fields from the request body
      const { firstname, lastname, email, password } = req.body;
  
      // Hash the password with 10 salt rounds
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user instance with the provided and hashed details
      const newUser = new User({
        firstname,
        lastname,
        email,
        password: hashedPassword,
        role: "customer",  // Default role set as 'customer'
      });
  
      // Save the new user to the database
      const savedUser = await newUser.save();
  
      // Respond with a 201 status and a success message, including the saved user data
      res.status(201).json({ 
        message: "User Created Successfully!", 
        user: savedUser 
      });
  
    } catch (error) {
      // Catch any errors and respond with a 400 status and the error message
      // FIX: Corrected to use 'error.message' instead of 'message.error' 
      res.status(500).json({ 
        message: error.message 
      });
    }
  };
  
module.exports = {signupUser};