const mongoose = require('mongoose');
const User = require('../model/User');

const handleLogout = async (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) return res.sendStatus(204);
  const refreshToken = cookies.jwt;

  const foundUser = await User.findOne({refreshToken: refreshToken}).exec();

  if (!foundUser) return res.sendStatus(403);

 try {
  const result = await User.findOneAndUpdate(
    {refreshToken: refreshToken},
    {refreshToken: " "},
    {new: true, upsert: true}
  )
 } catch (error) {
  console.error(error);
  res.sendStatus(401);
 }
  res.clearCookie("jwt", {
    httpOnly: true,
    sameSite: "None",
    secure: true,
    maxAge: 24 * 60 * 60 * 1000,
  });
  res.sendStatus(204);
};
module.exports = { handleLogout };
