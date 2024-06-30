const { Router } = require("express");

const (registerUser, loginUser, getUser, changeAvatar, editUser, getAuthors) = require 
("../controllers/userControllers")

const router = Router();

router.get("/", (req, res, next) => {
  res.json("This is the user route");
});
module.exports = router;
