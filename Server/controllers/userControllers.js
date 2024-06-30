// register a new user 
// POST : api/users/register 
// UNPROTECTED
const registerUser = (req, res, next) => {
  res.json("Register User");
};

// Login old user
// POST : api/users/login
// UNPROTECTED
const loginUser = (req, res, next) => {
  res.json("Login User");
};

// User profile
// POST : api/users/:id
// PROTECTED
const getUser = (req, res, next) => {
  res.json("User Profile");
};

// Change user pic 
// POST : api/users/change-avatar
// UNPROTECTED
const changeAvatar = (req, res, next) => {
  res.json("change User avatar");
};

// User edit
// POST : api/users/edit_user
// PROTECTED
const editUser = (req, res, next) => {
  res.json("edit user details");
};

// get authors
// POST : api/users/authors
// UNPROTECTED
const getAuthors = (req, res, next) => {
  res.json("get all authors");
};

module.exports = (registerUser, loginUser, getUser, changeAvatar, editUser, getAuthors)