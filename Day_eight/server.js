const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;

app.get(/^\/$|\/index(.html$)?/, (req, res)=>{
    // res.send('hllo world')
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})
app.get(/^\/new-page(.html$)?/, (req, res)=>{
    // res.send('hello world')
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
})

app.listen(PORT, ()=> console.log(`app is running on port ${PORT}`));
