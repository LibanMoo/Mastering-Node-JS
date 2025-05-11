const data = {
    user: require('../model/users.json'),
    setUser: function (data){
        this.data = this.user;
    }
};

const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');

