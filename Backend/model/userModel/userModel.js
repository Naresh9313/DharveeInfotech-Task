const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
   employeecode: {
        type: String,
        required: true
   },
  birthdate: {
        type: Date,
        required: true
  },
 emailid: {
        type: String,
        required: true
 }

});

const User = mongoose.model("User", userSchema);

module.exports = User;
