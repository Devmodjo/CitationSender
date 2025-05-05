const UserModel = require("../models/user.models");

// recuperation des utilisateurs
module.exports.getUser = async (req, res) => {
  const user = await UserModel.find();
  res.json(user);
};

module.exports.getUserById = async (req, res) => {
  const user = await UserModel.findById(req.params.id);
  res.json(user);
};

// creation d'un utilisateur
module.exports.setUser = async (req, res) => {
  try {
    if (!req.body) {
      res.json({
        msg: "merci de renseigner toutes les information utilisateurs",
      });
    }

    //cree un nouvel utilisateur
    const user = await UserModel.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    });

    res.json(user);
  } catch (err) {
    res.status(500).json({
      message:
        "une erreur est survenue  lors de l'enregistrement" + err.message,
    });
  }
};
