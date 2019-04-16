const db = require("../models");
const jwt = require("jsonwebtoken");
const secretOrPrivateKey = process.env.SECRET_KEY;

module.exports.signin = async function(req, res, next) {
  try {
    let user = await db.User.findOne({ email: req.body.email });

    let { id, username, email, profileImageUrl } = user;
    let isMatch = await user.comparePassword(req.body.password);
    if (isMatch) {
      const token = jwt.sign({ id, username }, secretOrPrivateKey);
      return res.status(200).json({
        id,
        username,
        token
      });
    } else {
      return next({
        status: 404,
        message: "Invalid email/password"
      });
    }
  } catch (err) {
    return next({
      status: 404,
      message: "Invalid email/password given"
    });
  }
};

module.exports.signup = async function(req, res, next) {
  try {
    let user = await db.User.create(req.body);

    let { id, username, profileImageUrl } = user;

    let token = jwt.sign(
      {
        id,
        username
      },
      secretOrPrivateKey
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
