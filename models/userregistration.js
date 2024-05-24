const mongoose=require("mongoose")

const userschema=mongoose.Schema({
    firstname:String,
    lastname:String,
    dateofbrith:Date,
    passward:String,
    mobilenumber:Number, 
    email:String,
    booking: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'bookings'
  }]
  });
  const userregistration  =mongoose.model("userregistration",userschema);
  module.exports=userregistration;
     