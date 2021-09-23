const readline = require('readline-sync');
const fs = require('fs');
// task logic imports
const createUser = require('./tasks/createUser');
const createTask = require('./tasks/createTask');
const deleteUser = require('./tasks/deleteUser');
const getAllTask = require('./tasks/getAllTask');
const getParticularTask = require('./tasks/getParticularTask');
const editTask = require('./tasks/editTask');
const deleteTask = require('./tasks/deleteTask');

function main() {

    console.log(`
                        |-------------------------------------------------------------|
                        |        1 : Create New User                                  |
                        |        2 : Delete User                                      |
                        |        3 : Create A Todo Task in todo.json	              |
                        |        4 : Get All the existing tasks in todo.json          |
                        |        5 : Get a particular task id data                    |
                        |        6 : Edit a Particular id todo task                   |
                        |        7 : Delete a Particular todo task                    |
                        |        0 : exit                                             |
                        |-------------------------------------------------------------|         
    `);
    let menu = readline.question('Select A Option From The List Displayed Above: ');

    switch (menu) {
        case '1':
            createUser();
            break;
        case '2':
            deleteUser();
            break;
        case '3':
            createTask();
            break;
        case '4':
            getAllTask();
            break;
        case '5':
            getParticularTask();
            break;
        case '6':
            editTask();
            break;
        case '7':
            deleteTask();
            break;
        case '0':
            exit();
            break;
        default:
            console.log('Invalid Response Try Again');
            main();
    }
}
main();







