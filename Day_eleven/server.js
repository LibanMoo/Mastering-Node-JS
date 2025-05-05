const express = require('express');
const app = express();
const path = require('path');
const {logger} = require('./middleware/logEvent')
const PORT = process.env.PORT || 3500;

app.use(express.urlencoded({extended: false}))

app.use(express.json())
app.use(express.static(path.join(__dirname, '/public')));

app.use('/employees', require('./routes/api/employees'))

app.use('/', require('./routes/root'))

app.use('subdir', require('./routes/subdir'));

app.use(logger);

app.get(/^.*$/, (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(PORT, ()=> console.log(`app is running on port ${PORT}`));