const db = require("../models");
const jwt = require("jsonwebtoken");

// module.exports.signin = function() {};

module.exports.signup = async function(req, res, next) {
  try {
    let user = await db.User.create(req.body);

    let { id, username, profileImageUrl } = user;

    let token = jwt.sign(
      {
        id,
        username
      },
      (secretOrPrivateKey = process.env.SECRET_KEY)
    );
    return res.status(200).json({
      id,
      username,
      token
    });
  } catch (err) {
    if (err.code === 11000) {
      err.message = "Sorry that username/email is already taken";
    }
    return next({
      status: 400,
      message: err.message
    });
  }
};
