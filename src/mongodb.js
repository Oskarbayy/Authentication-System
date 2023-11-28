const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/AuthProject")
.then(()=>{ // if succeeded
    console.log("database connected")
})

.catch(()=>{ // if failed
    console.log("database failed connection")
})

// Define schema
const LoginSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

// create constructor function
const LoginModel = new mongoose.model("Login", LoginSchema)

module.exports=LoginModel