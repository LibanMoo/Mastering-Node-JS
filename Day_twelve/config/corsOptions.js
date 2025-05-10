const whiteList = [ 'http://127.0.0.1:5500','http://localhost:3500', 'https://www.google.com'];
const corsOptions = {
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

module.exports = corsOptions;