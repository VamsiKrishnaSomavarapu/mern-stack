const express = require("express");
const signupRoute = require("./src/routes/SignUp");
const LoginRoute = require("./src/routes/Login");
const AuthenticatedRoute = require("./src/routes/Authenticated");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const { createAdminAccount } = require("./src/scripts/setup");
const PORT = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(cors());
createAdminAccount();
app.use("/user",signupRoute);
app.use("/auth",LoginRoute);
app.use("/api",AuthenticatedRoute);
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})