const fs = require('fs');
fileData = 'data to be saved';
function writeFile(){
    return new Promise((resolve,reject)=>{
        fs.writeFile('data.txt',fileData,(err)=>{
            if(err){
                reject(err);
            }
            else{
                resolve('File Created successfully');
            }
        });
    });
}
console.log(writeFile());

writeFile()
    .then((msg)=> {
        console.log(msg);
    })
    .catch((err)=> {
        console.error(err);
    });