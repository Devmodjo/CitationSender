require('dotenv').config();
const express = require("express");
const router = express.Router();
const cors = require('cors');
const { getUser, getUserById ,setUser  } = require('../controllers/user.controller');


router.get('/', cors(), getUser) // recupere tous les utilisateur
router.get('/:id', cors() ,getUserById) // recupere un utilisateur specifique
router.post('/', cors(), setUser) // enregistrer un utilisateur


module.exports = router;
