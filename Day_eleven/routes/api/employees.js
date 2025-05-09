const express = require('express');
const { post } = require('../root');
const employeesController = require('../../controllers/employeesController');
const router = express.Router();
console.log('reached here too')
router.route('/')
      .get(employeesController.getAllEmployee)
      .post(employeesController.createEmployee)
      .put(employeesController.updateEmployee)
      .delete(employeesController.deleteEmployee);

      router.route('/:id')

          .get(employeesController.getEmployees)
module.exports = router;
