const User = require('../model/User');

const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { user, pwd } = req.body;

  if (!user || !pwd) {
    return res.status(400).json({ message: "Username and Password needed" });
  }

  const duplicate = await User.findOne({username: user}).exec();

  if (duplicate) {
    return res.status(409).json({ message: "This user exists" });
  }

  try {
    const hashed_pw = await bcrypt.hash(pwd, 10);

    await User.create({
      "username": user, 
      "password": hashed_pw,
      "role": {"user": 335}
  })

    console.log(
      `new user: ${user}, original password: ${pwd}, hashed password: ${hashed_pw}`
    );

    res.status(201).json({ success: "User info recorded successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { handleNewUser };
