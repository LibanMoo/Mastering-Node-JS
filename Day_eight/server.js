const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;

app.listen(PORT, ()=> console.log(`app is running on port ${PORT}`));

app.get('/', (req, res)=>{
    // res.send('hello world')
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})
