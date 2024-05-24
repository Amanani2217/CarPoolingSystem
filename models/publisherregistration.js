const mongoose = require('mongoose');
const Publish = require("./publish");

const signUpSchema = new mongoose.Schema({

  mobilenumber:Number,
  firstname: {
    type: String,
    required: true
  },
  lastname: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  aadharno: {
    type: Number,
    required: true
  },
  aadharimage: String,
  dlno: {
    type: String,
    required: true
  },
  dlimage: String,
  rcno: {
    type: String,
    required: true
  },
  rcimage: String,
  dob: {
    type: Date,
    required: true
  },
  publishes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "publishs" // Corrected the reference to the model name
  }],
  booking:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'bookings'
}]
});

const PublisherSignup = mongoose.model('PublisherSignup', signUpSchema);

module.exports = PublisherSignup;
