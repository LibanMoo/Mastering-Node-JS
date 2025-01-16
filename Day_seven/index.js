const http = require('http');
const logEvents = require('./logEvent');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;


const eventEmitter = require('events');

class Emmitter extends eventEmitter{ };

const myEmmitter = new Emmitter();
myEmmitter.on('log', (message, filePath)=> logEvents(message, filePath));

const port = process.env.PORT || 3500;

const serverFile = async (filePath, contentType, response)=>{
    try {
     const rawData = await fsPromises.readFile(filePath, !contentType.includes('image') ? 'utf8' : '');
     const data = contentType === 'application/json' ? JSON.parse(rawData) : rawData;
     
     response.writeHead(filePath.includes('404.html') ? 404 : 200, {'content-Type' : contentType} );
     response.end(
        contentType === 'application/json' ? JSON.stringify(data) : data
     );
    }
    catch(err){
     console.error(err);
     myEmmitter.emit('log', `${err.name} : ${err.message}`, 'logError.txt');
     response.statusCode = 500;
     response.end();
    }
}

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method);
    myEmmitter.emit('log', `${req.url}\t ${req.method}`, 'logReq');

    const extension = path.extname(req.url);

    let contentType;

    switch(extension){
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.jpg':
            contentType = 'image/jpeg';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.txt':
            contentType = 'text/plain';
            break;
        default:
            contentType = 'text/html';
    }

    let filePath = 
    contentType === 'text/html' && req.url === '/'
    ? path.join(__dirname, 'views', 'new-page.html')
    : contentType === 'text/html' && req.url.slice(-1) === '/'
        ? path.join(__dirname, 'views', req.url, 'new-page.html')
        : contentType === 'text/html'
            ? path.join(__dirname, 'views', req.url)
            : path.join(__dirname, req.url);

    if (!extension && req.url.slice(-1) !== './') filePath+= '.html';
    const fileExits = fs.existsSync(filePath);

    if (fileExits){
        serverFile(filePath, contentType, res);
    }
    else {
        switch (path.parse(filePath).base) {
            case 'old-page.html':
                res.writeHead(301, { 'Location': '/new-page.html' });
                res.end();
                break;
            case 'www-page.html':
                res.writeHead(301, { 'Location': './' });
                res.end();
                break;
            default:
                serverFile(path.join(__dirname, 'views', 'new-page.html'), 'text/html', res);
        }
    }
});

server.listen(port, ()=> console.log(`Server is running in ${port}`));