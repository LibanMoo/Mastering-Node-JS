const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 3500;


app.use(logger)

const whiteList = [ 'http://127.0.0.1:5500','http://localhost:3500', 'https://www.google.com'];
const options = {
    origin: (origin, callback) => {
        if(whiteList.indexOf(origin)!== -1 || !origin){
            callback(null, true);
        }
        else {
            callback(new Error('Cors is not allowed for this site'));
        }
    },
    optionsSuccessStatus: 200
}
app.use(cors(options));

app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

// app.use('/static', express.static(path.join(__dirname, 'puplic')));

app.get(/^\/index($.html)?/, (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.get(/^.*$/, (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(PORT, ()=> console.log(`app is running on port ${PORT}`));