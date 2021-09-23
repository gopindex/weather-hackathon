const fs = require('fs');
const readline = require('readline-sync');
const path = require('path');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

async function editTask() {
    try {
        let id = readline.question('Enter The ID To Edit That Task: ');
        let taskContent = readline.question('Enter The New Task: ');
        let ref = false;
        const data = await readFile(path.resolve('data', 'todo.json'));
        let taskData = JSON.parse(data);
        taskData.forEach(ele => {
            if (id === ele.id) {
                ele.task = taskContent;
                ref = true;
            }
        })
        if (!ref) {
            throw new Error(`Invalid ID, Please Try Again`);
        }
        await writeFile(path.resolve('data', 'todo.json'), JSON.stringify(taskData));
        console.log("Task Is Updated Successfully");
    } catch (err) {
        console.error(err);
        editTask();
    }
}
module.exports = editTask;