const db = require("../models");

module.exports.createMessage = async function(req, res, next) {
  try {
    let message = await db.Message.create({
      text: req.body.text,
      user: req.params.id
    });
    let foundUser = await db.User.findById(req.params.id);
    foundUser.messages.push(message.id);
    await foundUser.save();

    let foundMessage = await db.Message.findById(message.id).populate("user", {
      username: true,
      profileImageUrl: true
    });
    return res.status(200).json(foundMessage);
  } catch (err) {
    return next(err);
  }
};

module.exports.getMessage = async function(req, res, next) {
  try {
    console.log("I am from get message");
    let foundMessage = await db.Message.find({ _id: req.params.message_id });
    return res.status(200).json(foundMessage);
  } catch (err) {
    next(err);
  }
};
exports.deleteMessage = async function(req, res, next) {
  try {
    let foundMessage = await db.Message.findById(req.params.message_id);
    await foundMessage.remove();

    return res.status(200).json(foundMessage);
  } catch (err) {
    return next(err);
  }
};
