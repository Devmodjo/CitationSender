const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    message: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: true,
    },
    source: {
      type: String,
      require: true,
    },
    likers: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("post", PostSchema);
