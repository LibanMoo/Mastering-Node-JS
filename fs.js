const fs = require('fs');
fs.readFile('./files/starter.txt', 'utf8', (err, data)=> {
    if(err) console.log(`here is the error: ${err}`);
    console.log(data);
    
})
console.log("hello...");


process.on('unCaughtException', err => {
    console.log(err);
    process.exit(1);
    
});