const { format } = require('date-fns');
const {v4: uuid} = require('uuid');

console.log(uuid);

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const eventCall = async (message) => {
    const date = `${format(new Date(), 'yyyy-MM-dd\tHH:mm:ss')}`;
    const logItem = `${date}\t${uuid()}\t${message}\n`;

    try {
        if (!fs.existsSync(path.join(__dirname, 'logs'))){
          await  fsPromises.mkdir(path.join(__dirname, 'logs'));
        }
    await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLogs.txt'), logItem);
    }
    catch(err){
     console.error(err);
    }
}

module.exports = eventCall;