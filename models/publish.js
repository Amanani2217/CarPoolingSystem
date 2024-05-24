const mongoose =require("mongoose");

const publishschema= new mongoose.Schema({
     from:String,
     to:String,
     date:Date,
     time:String,
     capicity:Number,
     price:Number, 
     type:String,
     publisherid: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'publishersignups' // Assuming you have a User model, replace 'User' with the actual model name
      }

});

const Publishes =mongoose.model("Publishes",publishschema);
module.exports=Publishes;
