const fs = require('fs');
(async ()=>{
    try{
        await fs.promises.appendFile('../../../data/06_appendFile.txt','Hello world');
        console.log('Data was appended to file successfully');
    }catch(err){
        console.log(err);
    }
})();