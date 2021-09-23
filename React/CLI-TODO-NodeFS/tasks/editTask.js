const fs = require('fs');
const readline = require('readline-sync');
const path = require('path');
function editTask() {
    let id = readline.questionInt('Enter The ID To Edit That Task: ');
    let taskContent = readline.question('Enter The New Task: ');
    fs.readFile(path.resolve('data', 'todo.json'), (err, data) => {
        if (err) {
            console.error(err);
        }
        else {
            let taskData = JSON.parse(data);
            taskData.forEach((ele, index) => {
                if (id === taskData[index].id) {
                    taskData[index].task = taskContent;
                }
            });
            fs.writeFile(path.resolve('data', 'todo.json'), JSON.stringify(taskData), (err) => {
                if (err) {
                    console.error(err);
                }
                else {
                    console.log("Task Is Added Successfully");
                }
            })
        }
    })
}
module.exports = editTask;