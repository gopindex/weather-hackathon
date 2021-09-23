const fs = require('fs');
const readline = require('readline-sync');
const path = require('path');
const util = require('util');

const readFile = util.promisify(fs.readFile);
async function getParticularTask() {
    try {
        let email = readline.question('Enter Your Email: ')
        let data = await readFile(path.resolve('data', 'user.json'))
        let taskData = JSON.parse(data);
        let newData = await readFile(path.resolve('data', 'usertodo.json'))
        let todoTask = JSON.parse(newData);
        let ref = false;
        taskData.forEach((ele) => {
            if (email === ele.email) {
                ref = true;
                let id = readline.question('Enter The ID To Get The Particular Task: ');
                let val = false;
                let userId = ele.user_id;
                todoTask.forEach((ele) => {
                    if (userId === ele.user_id) {
                        let todo = ele.todos;
                        todo.forEach((ele) => {
                            if (id === ele.id) {
                                val = true
                                console.log(ele.task);
                            }
                        });
                    }
                })
                if (!val) {
                    throw new Error("Invalid Id")
                }
            }
        })
        if (!ref) {
            throw new Error("Invalid Email")
        }
    }
    catch (err) {
        console.error(err);
        getParticularTask();
    }
}
module.exports = getParticularTask;

