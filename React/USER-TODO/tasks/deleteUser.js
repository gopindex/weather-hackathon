const fs = require('fs');
const readline = require('readline-sync');
const path = require('path');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
async function deleteUser(){
    try{
        let email = readline.questionEMail(`Enter Your Email address:   `);
        let data  = await readFile(path.resolve('data', 'user.json'));
        let taskData = JSON.parse(data);
        let todoData  = await readFile(path.resolve('data', 'usertodo.json'));
        let newData = JSON.parse(todoData);
            let isExists = false;
            taskData.forEach((item, index) => {
                if (item.email === email) {
                    taskData.splice(index, 1);
                    isExists = true;
                    let userId = item.user_id;
                    newData.forEach((item,index) => {
                        if(item.user_id === userId){
                            newData.splice(index, 1);
                        }
                    })
                }
            });
            if (!isExists) {
                throw new Error("Invalid Email")
            }
            await writeFile(path.resolve('data', 'user.json'), JSON.stringify(taskData))
            await writeFile(path.resolve('data', 'usertodo.json'), JSON.stringify(newData))
            console.log("User Deleted Successfully");
    }
    catch(err){
        console.error(err);
        deleteUser();
    }
}
module.exports = deleteUser;

