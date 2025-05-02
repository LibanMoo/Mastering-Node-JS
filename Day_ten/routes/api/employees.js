const express = require('express');
const { post } = require('../root');
const router = express.Router();
const data = {};

data.employees(require('../../data/employees.json'));

router.route('/')
      .get('/', (req, res)=>{
        res.json(data.employees);
      })
      .post((req, res)=>{
        res.json({
            "firstName": req.body.firstName,
            "lastName": req.body.lastName
        })
      })
      .put((req, res)=>{
        res.json
      })
      .delete((req, res)=>{
        res.json({"id": req.body.id})
      })

