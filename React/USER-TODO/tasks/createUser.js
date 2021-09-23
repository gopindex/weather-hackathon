const fs = require('fs');
const readline = require('readline-sync');
const path = require('path');
const util = require('util');
const { v4: uuidv4 } = require('uuid');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
async function createUser() {
    try {
        let email = readline.question('Enter Your Email: ');
        let name = readline.question('Enter Your Name: ');
        let fileData = await readFile(path.resolve('data', 'user.json'))
        let data = JSON.parse(fileData.toString());
        let result = data.filter(item => item.email === email);
        if (result.length !== 0) {
            throw new Error("Email Already Exists");
        }
        else {
            var newId = uuidv4();
            let newUser = { email: email, name: name, user_id: newId };
            data.push(newUser);
        }
        let todoData = await readFile(path.resolve('data', 'usertodo.json'))
        let newTodo = JSON.parse(todoData.toString());
        let newData = { user_id: newId, todos: [] };
        newTodo.push(newData);
        await writeFile(path.resolve('data', 'user.json'), JSON.stringify(data))
        await writeFile(path.resolve('data', 'usertodo.json'), JSON.stringify(newTodo))
        console.log("User Added Successfully");
    }
    catch (err) {
        console.error(err);
        createUser();
    }
}

module.exports = createUser;
