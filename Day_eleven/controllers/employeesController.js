const data = {};
data.employees = require('../model/employees.json')

const getAllEmployee = (req, res) =>{
    res.json(data.employees)
}
 
const getEmployee = (req, res) => {
    res.json({"id": req.params.id})
}

const updateEmployee = (req, res) => {
    res.json({
        "firstName": req.body.firsName,
        "lastName": req.body.lastName
    })
}

const deleteEmployee = (req, res) => {
    res.json({"id": req.params.id})
}

module.exports = {
    getAllEmployee,
    getEmployee,
    updateEmployee,
    deleteEmployee
};