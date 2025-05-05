const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const {logger} = require('./middleware/logEvent')
const errorHandler = require('./middleware/errorHandler')
const PORT = process.env.PORT || 3500;

app.use(express.urlencoded({extended: false}))

app.use(express.json())
app.use(express.static(path.join(__dirname, '/public')));

app.use(cors(corsOptions));
app.use('/employees', require('./routes/api/employees'))

app.use('/', require('./routes/root'))

app.use(logger);

app.use(errorHandler)

app.get(/^.*$/, (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(PORT, ()=> console.log(`app is running on port ${PORT}`));