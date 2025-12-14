const express = require("express");
const { post } = require("../root");
const employeesController = require("../../controllers/employeesController");
const verifyRoles = require('../../middleware/verifyRoles');
const roles = require('../../config/roles');
const router = express.Router();
router
  .route("/")
  .get(employeesController.getAllEmployee)
  .post(verifyRoles(roles.admin, roles.editor), employeesController.createEmployee)
  .put(verifyRoles(roles.admin, roles.editor), employeesController.updateEmployee)
  .delete(verifyRoles(roles.admin), employeesController.deleteEmployee);

router
  .route("/:id")

  .get(employeesController.getEmployees)
  .delete(verifyRoles(roles.admin), employeesController.deleteEmployee);
module.exports = router;
