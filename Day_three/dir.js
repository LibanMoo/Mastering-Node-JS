const fs = require('fs');
const liban = async ()=> {
    try {
        if (!fs.existsSync('./new')){
            await fs.mkdir('./new', ()=>{
                //  if(err) throw err;
                 console.log("dir created succesfully");
                 
             })
         }
         
    }
    catch (err){
      console.log(`here is the error: ${err} `);
      
    }

    
    if (fs.existsSync('./new')){
        fs.rmdir('./new', err=> {
            if (err) throw err;
            console.log('Directory deleted successfully');
            
        })
    }
};
liban();

