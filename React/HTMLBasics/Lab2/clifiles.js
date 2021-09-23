const fs = require('fs');
const readlineSync = require('readline-sync');
let exit = 0;
console.log("Menu");
console.log("1.Read a file");
console.log("2.Create a file");
console.log("3.Append new data to a file");
console.log("4.Delete the file");
console.log("5.Create the directory");
console.log("6.Delete the directory");
console.log("0.exit");
let choice = readlineSync.question("please enter your choice:");
let filename = readlineSync.question("enter filename:");
do {
    exit = 0;
    if (choice == 1) {
        fs.readFile(filename, function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log("Asynchronous read: " + data.toString());
            console.log("Menu");
            console.log("1.Read a file");
            console.log("2.Create a file");
            console.log("3.Append new data to a file");
            console.log("4.Delete the file");
            console.log("5.Create the directory");
            console.log("6.Delete the directory");
            console.log("0.exit");
             choice = readlineSync.question("please enter your choice:");
             filename = readlineSync.question("enter filename:");
        });
    }
    if (choice == 2) {
        fs.open(filename, 'w+', function (err, fd) {
            if (err) {
                return console.error(err);
            }
            console.log("File created successfully!");
            console.log("Menu");
            console.log("1.Read a file");
            console.log("2.Create a file");
            console.log("3.Append new data to a file");
            console.log("4.Delete the file");
            console.log("5.Create the directory");
            console.log("6.Delete the directory");
            console.log("0.exit");
             choice = readlineSync.question("please enter your choice:");
             filename = readlineSync.question("enter filename:");
        });
    }
    if (choice == 3) {
        let data = readlineSync.question("enter data to append:");
        fs.appendFile(filename, data, function (err) {
            if (err) throw err;
            console.log('Saved!');
            console.log("Menu");
            console.log("1.Read a file");
            console.log("2.Create a file");
            console.log("3.Append new data to a file");
            console.log("4.Delete the file");
            console.log("5.Create the directory");
            console.log("6.Delete the directory");
            console.log("0.exit");
             choice = readlineSync.question("please enter your choice:");
             filename = readlineSync.question("enter filename:");
        });
    }
    if (choice == 4) {
        fs.unlink(filename, function (err) {
            if (err) {
                return console.error(err);
            }
            console.log("File deleted successfully!");
            console.log("Menu");
            console.log("1.Read a file");
            console.log("2.Create a file");
            console.log("3.Append new data to a file");
            console.log("4.Delete the file");
            console.log("5.Create the directory");
            console.log("6.Delete the directory");
            console.log("0.exit");
             choice = readlineSync.question("please enter your choice:");
             filename = readlineSync.question("enter filename:");
        });
    }
    if (choice == 5) {
        let directory = readlineSync.question("enter a directory to create:");
        fs.mkdir(directory, function (err) {
            if (err) {
                return console.error(err);
            }
            console.log("Directory created successfully!");
            console.log("Menu");
            console.log("1.Read a file");
            console.log("2.Create a file");
            console.log("3.Append new data to a file");
            console.log("4.Delete the file");
            console.log("5.Create the directory");
            console.log("6.Delete the directory");
            console.log("0.exit");
             choice = readlineSync.question("please enter your choice:");
             filename = readlineSync.question("enter filename:");
        });
    }
    if (choice == 6) {
        let directory = readlineSync.question("enter a directory to remove:");
        fs.rmdir(directory, function (err) {
            if (err) {
                return console.error(err);
            }
            console.log("Directory removed successfully!");
            console.log("Menu");
            console.log("1.Read a file");
            console.log("2.Create a file");
            console.log("3.Append new data to a file");
            console.log("4.Delete the file");
            console.log("5.Create the directory");
            console.log("6.Delete the directory");
            console.log("0.exit");
             choice = readlineSync.question("please enter your choice:");
             filename = readlineSync.question("enter filename:");
        });
    }
    if (choice == 0) {
        exit = 1;
    }
} while (exit == 0);


