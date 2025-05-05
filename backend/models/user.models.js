const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    profilePicture:{
      type:String
    }
  },
  {
    timestamps: true,
  }
);

// permet de cree la collection dans la base de donne
module.exports = mongoose.model("user", userSchema)