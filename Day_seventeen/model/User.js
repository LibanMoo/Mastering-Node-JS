const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema ({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        user: {
            type: Number,
            default: 335,
        },
        admin: String,
        editor: String
    },
    refreshToken: String 
})

module.exports = mongoose.model('User', userSchema);