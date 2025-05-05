const PostModel = require("../models/post.models");

module.exports.getPost = async (req, res) => {
  const post = await PostModel.find();
  res.json(post);
};

module.exports.setPost = async (req, res) => {
  if (!req.body) {
    res
      .status(400)
      .json({ message: "veuillez renseigner toutes les information" });
    return;
  }

  const post = await PostModel.create({
    username: req.body.username,
    message: req.body.message,
    author: req.body.author,
    source: req.body.source,
  });

  res.json(post);
};
