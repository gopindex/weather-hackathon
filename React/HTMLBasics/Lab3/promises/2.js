const fs = require('fs');
fileData = 'data to be saved';
function readFile(){
    return new Promise((resolve,reject)=>{
        fs.readFile('data.txt',(err,data)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(data.toString());
            }
        });
    });
}
//console.log(readFile());

readFile()
    .then((msg)=> {
        console.log(msg);
    })
    .catch((err)=> {
        console.error(err);
    });