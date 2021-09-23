const fs = require('fs');
const readlineSync = require('readline-sync');

fs.appendFile('data.txt', 'data to append', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

let input = readlineSync.question('Please enter input:');
let filename = process.argv[2];
try {
    if (fs.existsSync(filename)) {
        console.log("to create file!");
        fs.open(filename, 'w+', function (err, fd) {
            if (err) {
                return console.error(err);
            }
            console.log("File created successfully!");
        });
        console.log("to write into existing file");
        fs.writeFile(filename, input, function (err) {
            if (err) {
                return console.error(err);
            }
            console.log("to read written data");

            fs.readFile(filename, function (err, data) {
                if (err) {
                    return console.error(err);
                }
                console.log("Asynchronous read: " + data.toString());
            });
        });
    }
} catch (err) {
    console.error(err)
}
