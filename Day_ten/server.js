const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;


app.use('/static', express.static(path.join(__dirname, 'public')));

app.use('subdir', require('./routes/subdir'));

app.get(/^\/index($.html)?/, (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.get(/^.*$/, (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(PORT, ()=> console.log(`app is running on port ${PORT}`));