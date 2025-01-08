const fs = require('fs');
const rs = fs.createWriteStream('lorem-new.txt');
const ws = fs.createReadStream('lorem-new.txt', {encoding: 'utf8'});

rs.pipe(ws);