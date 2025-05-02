const express = require('express');
const route = express.Router();
const path = require('path');

route.get(/^\/index($.html)?/, (req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
})
route.get(/^\/new-page($.html)?/, (req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'new-page.html'));
})
route.get(/^\/new-page($.html)?/, (req, res)=>{
    res.redirect(301, path.join(__dirname, '..', 'views', 'new-page.html'));
})