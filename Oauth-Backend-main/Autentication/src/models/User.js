const mongoose  =  require("../configuration/dbconfig");

const UserSchema = new mongoose.Schema({
    firstname : String,
    lastname : String,
    email : {type : String, unique:true},
    password : String,
    role:{type : String ,enum : ["admin","customer"],default : "customer"},
});

module.exports = mongoose.model("User",UserSchema);