const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = await User.create({ username, email });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
