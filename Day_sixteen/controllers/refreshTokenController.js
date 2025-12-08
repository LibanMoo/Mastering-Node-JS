const usersData = {
  users: require("../model/users.json"),
  setUser: function (data) {
    this.users = data;
  },
};

const jwt = require("jsonwebtoken");

const handleRefreshToken =  (req, res) => {
  const cookies = req.cookies;

  if(!cookies?.jwt) return res.sendStatus(401); // unauthorized
  const refreshToken = cookies.jwt;
  const foundUser = usersData.users.find(person => person.refreshToken === refreshToken);

  if (!foundUser) return res.sendStatus(403); //forbidden

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    (err, decoded) => {
        if (err) return res.sendStatus(403); //forbidden
        const accessToken = jwt.sign(
            {"username": decoded.username},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: "30s"}
        )
        res.json({accessToken});
    }
  )
};
module.exports = { handleRefreshToken };
