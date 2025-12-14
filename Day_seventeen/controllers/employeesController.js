const mongoose = require("mongoose");
const Employee = require("../model/Employee");

const getAllEmployee = async (req, res) => {
  res.json(await Employee.find({}));
};

const createEmployee = async (req, res) => {
  const { firstName, lastName } = req.body;

  if (!firstName || !lastName) {
    return res.send("provide the fistname and the lastname");
  }
  const newEmployee = await Employee.create({
    firstname: firstName,
    lastname: lastName,
  });
  res.send(newEmployee);
};
const getEmployees = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res
        .status(500)
        .json({ message: `this employee ${req.params.id} doesnt exist` });
    }
    res.json(employee);
  } catch (error) {
    console.error(error);
  }
};

const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName } = req.body;

  try {
    const updatedEmployee = await Employee.findOneAndUpdate(
      { _id: id },
      { firstname: firstName, lastname: lastName },
      { new: true, runValidators: true }
    );
    if (!updatedEmployee) {
      return res.json(`id not found ${id}`);
    }
    res.json(updatedEmployee);
  } catch (error) {
    console.error(error);
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEmployee = await Employee.findOneAndDelete(id);
    if (!deletedEmployee) {
      return res.json(`Employee deletion failed id: ${id}`);
    }
    res.json({message:'Employee deleted successfully', deletedEmployee});
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllEmployee,
  getEmployees,
  updateEmployee,
  deleteEmployee,
  createEmployee,
};