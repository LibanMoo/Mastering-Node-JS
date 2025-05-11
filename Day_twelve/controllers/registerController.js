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
}

module.exports = {handleNewUser};

