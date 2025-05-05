const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    message: {
      type: String,
      require: true,
    },
    liker: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.models("comments", CommentSchema);
