const fs = require('fs');
const path = require('path');
const readline = require('readline-sync')
const util = require('util');
const readFile = util.promisify(fs.readFile);
async function getAllTask() {
    try {
        let email = readline.question('Enter Your Email ID: ')
        let data = await readFile(path.resolve('data', 'user.json'))
        let taskData = JSON.parse(data);
        let newData = await readFile(path.resolve('data', 'usertodo.json'))
        let todoTask = JSON.parse(newData);
        let ref = false;
        taskData.forEach((ele) => {
            if (email === ele.email) {
                let userId = ele.user_id;
                todoTask.forEach((ele) => {
                    if (userId === ele.user_id) {
                        let todo = ele.todos;
                        todo.forEach((ele) => {
                            console.log(ele.task);
                            ref = true;
                        })
                    }
                })
            }
        });
        if (!ref) {
            throw new Error("Invalid Email")
        }
    }
    catch (err) {
        console.error(err);
        getAllTask();
    }
}
module.exports = getAllTask;