const fs = require('fs');
const readline = require('readline-sync');
const path = require('path');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
async function deleteTask() {
    try {
        let email = readline.question('Enter Your Email: ');
        let data = await readFile(path.resolve('data', 'user.json'))
        let taskData = JSON.parse(data);
        let newData = await readFile(path.resolve('data', 'usertodo.json'))
        let todoData = JSON.parse(newData);
        let ref = false;
        taskData.forEach((ele) => {
            if (email === ele.email) {
                ref = true;
                let id = readline.question('Enter The ID To Delete That Task: ');
                let userId = ele.user_id;
                todoData.forEach((ele) => {
                    if (userId === ele.user_id) {
                        let todo = ele.todos;
                        let result = todo.filter(item => item.id === id);
                        if (result.length === 0) {
                            throw new Error("Invalid id");
                        } else {
                            let index = todo.findIndex(function (data) {
                                return data.id === id;
                            });
                            todo.splice(index, 1)
                        }
                    }
                })
            }
        });
        await writeFile(path.resolve('data', 'usertodo.json'), JSON.stringify(todoData))
        console.log("Task Deleted Successfully");
        if (!ref) {
            throw new Error("Invalid Email");
        }
    }
    catch (err) {
        console.error(err);
        deleteTask();
    }
}
module.exports = deleteTask;