const {logEvent} = require('./logEvent');

const errorHandler = (req, err, res, next)=>{
    logEvent(`${err.name} : ${err.message}`, 'errorLog.txt')
    console.error(err.stack);
    res.status(500).send(err.message);
}

module.exports = errorHandler;
