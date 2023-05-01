const fsPromises = require('fs/promises');
const fsConstants = require('fs').constants;

async function copyFIle(){
    try{
        await fsPromises.copyFile('../../../data/copy_source/01_copyFile.txt','../../../data/copy_source/01_copyFile.txt',fsConstants.COPYFILE_FICLONE);
        console.log('File copied successfully!');
    }catch(err){
        console.log(err);
    }
}
copyFIle();