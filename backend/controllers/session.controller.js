const sessionModel = require("../models/session.model");

module.exports.getSession = async (req, res) => {
  const session = await sessionModel.find();
  res.json(session);
};

module.exports.setSession = async (req, res) => {
  if (!req.body) {
    res
      .status(400)
      .json({ message: "veuillez renseigner toutes les information" });
    return;
  }

  const session = await sessionModel.create({
    username: req.body.username,
    password: req.body.password,
  });

  res.json(session);
};

module.exports.deleteSession = async (req, res) => {
  if (!req.body) {
    res
      .status(400)
      .json({ message: "veuillez renseigner toutes les information" });
    return;
  }

  const session = await sessionModel.findByIdAndDelete(req.params.id);

  if (!session) {
    res.status(404).json({ message: "Session non trouvée" });
    return;
  }

  res.json({ message: "Session supprimée avec succès" });
};
