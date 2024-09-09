const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://vamsipersonal55:vamsipersonal55@bamsi.mfdg7.mongodb.net/",{
     serverSelectionTimeoutMS : 5001
});
mongoose.connection.on("connected", () =>{
    console.log("Connected to Database");
});
mongoose.connection.on("error", (error) =>{
    console.log("MongoDb connection error :", error);
});

module.exports = mongoose;
