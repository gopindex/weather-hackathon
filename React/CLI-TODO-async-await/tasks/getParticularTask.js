const fs = require('fs');
const readline = require('readline-sync');
const path = require('path');
const util = require('util');

const readFile = util.promisify(fs.readFile);

async function getParticularTask() {
    try {
        const id = readline.question(`Know the Task by it's Particular ID:  `);
        let ref = false;
        const fileData = await readFile(path.resolve('data', 'todo.json'));
        let data = JSON.parse(fileData);
        data.forEach((ele) => {
            if (id === ele.id) {
                console.log(ele.task);
                ref = true;
            }
        })
        if (!ref) {
            throw new Error(`Invalid ID, Please Try Again`);
        }
    }
    catch (err) {
        console.error(err);
        getParticularTask();
    }
}
module.exports = getParticularTask;