const whiteList = [ 'http://127.0.0.1:5500','http://localhost:3500', 'https://www.google.com'];
const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200
}

module.exports = corsOptions;