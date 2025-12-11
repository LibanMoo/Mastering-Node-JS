const mongoose = require('mongoose');
const User = require('../model/User');

const jwt = require("jsonwebtoken");

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;

  if(!cookies?.jwt) return res.sendStatus(401); // unauthorized
  const refreshToken = cookies.jwt;
  const foundUser = await User.findOne({refreshToken: refreshToken}).exec();

  if (!foundUser) return res.sendStatus(403); //forbidden

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    (err, decoded) => {
        if (err) return res.sendStatus(403); //forbidden
           const accessToken = jwt.sign(
             {
               userInfo: {
                 "username": foundUser.username,
                 "roles": foundUser.role,
               },
             },
             process.env.ACCESS_TOKEN_SECRET,
             { expiresIn: "60s" }
           );
        res.json({accessToken});
    }
  )
};
module.exports = { handleRefreshToken };
