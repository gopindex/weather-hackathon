const fs = require('fs');
const readline = require('readline-sync');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
async function createTask() {
    try {
        let emailUser = readline.question(`Enter Email: `);
        let fileData = await readFile(path.resolve('data', 'user.json'));
        let data = JSON.parse(fileData.toString());
        let todoData = await readFile(path.resolve('data', 'usertodo.json'));
        let newData = JSON.parse(todoData.toString());
        let ref = false;
        data.forEach((ele) => {
            if (emailUser == ele.email) {
                let task = readline.question(`Enter The Task:`);
                let userId = ele.user_id;
                ref = true;
                newData.forEach((ele) => {
                    if (userId === ele.user_id) {
                        let store = ele.todos;
                        let newTask = { id: uuidv4(), task: task };
                        store.push(newTask);
                    }
                })
            }
        });
        await writeFile(path.resolve('data', 'usertodo.json'), JSON.stringify(newData))
        console.log("Task Created Successfully");
        if (!ref) {
            throw new Error("Invalid Email");
        }
    }
    catch (err) {
        console.error(err);
        createTask();
    }
}
module.exports = createTask;