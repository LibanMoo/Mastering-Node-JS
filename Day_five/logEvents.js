// const {format} = require('date-fns');
// console.log(format);

// console.log('hello world22S5');

const {format} = require('date-fns');
const {v4: uuid} = require('uuid');
const fs = require('fs');
const fsPromise = require('fs').promises;
const path = require('path');

console.log(format(new Date(), 'yyyymdd/tHH:mm:ss'));


// console.log(uuid());

