const mongoose = require("mongoose");
const { Schema } = mongoose;

const loginSchema= new Schema({
   name:{
    type:String,
   },
  email:{
    type:String,
  },
  mobile:{
    type:Number
  },
  password:{
    type:String
  },
  is_admin:{
    type:Number,
    default:0
  },
  is_verified:{
    type:Number,
    default:0
  }

})
module.exports=mongoose.model("userLoginModel",loginSchema)