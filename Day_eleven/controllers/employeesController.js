const data = {
    employees : require('../model/employees.json'),
    setEmployees: (data)=> this.employees = data
};


const getAllEmployee = (req, res) =>{
    res.json(data.employees)
}

const createEmployee = (req, res) => {
   const newEmployee = {
    id: data.employees(data.employees.length -1).data || 1,
    firstName: req.body.firstName,
    lastName: req.body.lastName
   }
   if(!newEmployee.firstName || !newEmployee.lastName){
    res.status(400).json({"message": "Set First name and Last name"});
   }
   data.setEmployee([...data.employees, newEmployee]);
   res.json(data.employees);

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
    getEmployees,
    updateEmployee,
    deleteEmployee,
    createEmployee
};