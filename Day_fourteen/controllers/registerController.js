const data = {
  user: require("../model/users.json"),
  setUser: function (newUser) {
    this.user.push(newUser);
  },
};

const fsPromises = require("fs").promises;
const path = require("path");
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { user, pwd } = req.body;

  if (!user || !pwd) {
    return res.status(400).json({ message: "Username and Password needed" });
  }

  const duplicate = data.user.find((person) => person.username === user);

  if (duplicate) {
    return res.status(409).json({ message: "This user exists" });
  }

  try {
    const hashed_pw = await bcrypt.hash(pwd, 10);

    const newUser = { 
      "username": user, 
      "password": hashed_pw,
      "role": {"user": 335}
    };

    data.setUser(newUser);

    await fsPromises.writeFile(
      path.join(__dirname, "..", "model", "users.json"),
      JSON.stringify(data.user, null, 2) // formatted JSON
    );

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
