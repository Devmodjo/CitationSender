const express = require("express");
const { getPost, setPost } = require("../controllers/post.controller");
const router = express.Router();

router.get("/", getPost)
router.post("/", setPost)

module.exports = router;