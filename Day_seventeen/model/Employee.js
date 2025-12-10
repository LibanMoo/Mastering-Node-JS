const mongoose = require('mongoose');
const schema = mongoose.Schema;

const EmployeeSchema = new schema ({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Employee", EmployeeSchema);