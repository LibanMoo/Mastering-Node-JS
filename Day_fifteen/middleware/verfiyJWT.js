const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  console.log("reached the verifyJWT function");
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.sendStatus(401);
  console.log(authHeader);
  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.user = decoded.userInfo.username;
    req.roles = decoded.userInfo.roles;
    next();
  });
};
module.exports = verifyJWT;
