const readline = require('readline-sync');

function exit() {
    let check = readline.question(`Do You Want to Continue?(Y/N):  `);
    if (check === 'Y' || check === 'y' || check === 'yes' || check === 'Yes') {
        main();
    } else if (check === 'N' || check === 'n' || check === 'no' || check === 'No') {
        console.log(`Thank You!`);
    } else {
        console.log(`Inavlid Input, Please Click Y or N`);
        ask();
    }
}

module.exports = exit;