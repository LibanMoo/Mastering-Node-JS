const fs = require('fs');
const path = require('node:path');
// console.log(path);

// console.log(path.dirname);
// let filesPath = path.dirname('C:\Users\pc\Desktop\My_WorkSpace\Node_JS\Day_two\files');



// fs.readFile(filesPath , 'stater.txt', "utf8", (err,data)=> {
//     if(err) console.log(`here is the error: ${err}`);
//     console.log(data);
// })
// fs.readFile(path.join(__dirname, 'test.txt'), 'utf8', (err,res)=>{
//     if (err) console.log(`here is the error: ${err}`);
//     console.log(res);
// });

// fs.writeFile(path.join(__dirname, 'reply.txt'), 'Nice to meet you',  err=> {
//     if (err) console.log(err);
//     console.log('completed');
// })

// fs.appendFile(path.join(__dirname, 'reply.txt'), '\n\nYes we are here', err=>{
//     if (err) console.log(err);
//     console.log('guided');
    
    
// })
// fs.rename(path.join(__dirname, 'test.txt'), path.join(__dirname, 'newName'), err=>{
//     if (err) console.log(err);
//     console.log("rename completed");
    
// })

const fileManage = async ()=> {
    try {
       await fs.readFile(path.join(__dirname, 'starter.txt'), 'utf8', (err, res)=>{
            if (err) console.log(err);
            console.log(res);
        })
       await fs.unlink(path.join(__dirname, 'starter.txt'), ()=>{
        console.log('deleted the file');
        
       });
       await fs.writeFile(path.join(__dirname, 'NewPromise.txt'), 'Hello here is the content');
       await fs.rename(path.join(__dirname, 'NewPromise.txt')), path.join(__dirname, 'newName');
       await fs.readFile(path.join(__dirname, 'newName'), 'utf8', (err,res)=>{
             if (err) console.log(err);
             console.log(res);
             
       })
    }
    catch (err) {
             console.log(err);
             
    }
}

fileManage();
