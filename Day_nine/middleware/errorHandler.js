const logEvent = require('./logEvent');

app.use((req, err, res, next)=>{
    logEvent(`${err.name} : ${err.message}`, 'errorLog.txt')
    console.error(err.stack);
    res.status(500).send(err.message);
})
