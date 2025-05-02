const data = {};
data.employees = require('../model/employees.json')

const getAllEmployee = (req, res) =>{
    res.json(data.employees)
}

const createEmployee = (req, res) => {
    res.json({
        "firstName": req.body.firstName,
        "lastName": req.body.lastName
    })
}
const getEmployees = (req, res) => {
    res.json({"id": req.params.id})
}

const updateEmployee = (req, res) => {
    res.json({
        "firstName": req.body.firstName,
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
    deleteEmployee,
    createEmployee
};