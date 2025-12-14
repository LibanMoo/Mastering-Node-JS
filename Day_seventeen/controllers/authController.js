const mongoose = require('mongoose');
const User = require('../model/User');
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const handleLogin = async (req, res) => {
  const { user, pwd } = req.body;

  if (!user || !pwd)
    return res
      .status(400)
      .json({ message: "username and password are required" });
      
  const foundUser = await User.findOne({username: user}).exec();

  if (!foundUser) return res.sendStatus(401);

  const match = await bcrypt.compare(pwd, foundUser.password);
  if (match) {
    const accessToken = jwt.sign(
      { "userInfo": {
           "username": foundUser.username,
           "roles": foundUser.role
      },
    },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "60s" }
    );
    const refreshToken = jwt.sign(
      { "username": foundUser.username },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

  try {
    const result = await User.findOneAndUpdate(
      {username: user},
      {refreshToken: refreshToken},
      {new: true, upsert: true}
    )    
  } catch (error) {
    console.error(error)
    res.sendStatus(401);    
  }
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      sameSite: 'None',
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ accessToken });
  } else {
    res.sendStatus(401);
  }
};
module.exports = { handleLogin };
