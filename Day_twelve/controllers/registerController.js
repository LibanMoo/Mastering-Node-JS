const data = {
    user: require('../model/users.json'),
    setUser: function (data){
        this.data = this.user;
    }
};

const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res)=>{
    const {user, pwd} = req.body;

    if (!user || !pwd){
     res.status(400).json({"message": "Username and Password needed"})
    }
    const dublicate = data.user.find(person => person.username = user);

    if (dublicate){
        res.status(409).json({"message": "this user exits"})
    }
    try{
      const hashed_pw = await bcrypt.hash(pwd, 10);

      const newUser = {username: user, password: hashed_pw};

      data.setUser(...data.user, newUser);

      await fsPromises.writeFile(
            path.join(__dirname, '..', 'model', 'users.json'),
            JSON.stringify(data.user)
      )
      console.log(`new user: ${user} and password: ${hashed_pw}`)
      res.status(201).json({"success": "User info recorded succesfully"})
}
    
    catch(err){
         console.error(err);
    }
}

module.exports = {handleNewUser};

