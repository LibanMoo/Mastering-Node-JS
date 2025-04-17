const express = require('express');
const app = express();
const logEvents = require('./middleware/logEvent');
const path = require('path');
const PORT = process.env.PORT || 3500;


app.use((req, res, next)=>{
    console.log(`${req.method} \t ${res.path}`);
    next();
})

app.use(express.urlencoded({extended: false}));

// app.use(express.json());

// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/static', express.static(path.join(__dirname, 'puplic')));

app.get(/^\/index($.html)?/, (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.listen(PORT, ()=> console.log(`app is running on port ${PORT}`));