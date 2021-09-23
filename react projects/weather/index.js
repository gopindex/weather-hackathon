const readline = require('readline-sync');

const weather = require('./weather');


function main() {
    console.log(`
                        |-------------------------------------------------------------|
                        |        1 : know the weather in a city	              |
                        |        0 : exit                                             |
                        |-------------------------------------------------------------|         
    `);
    let menu = readline.questionInt("Select the Option from the List Displayed Above:  ");
    switch (menu) {
        case 1:
            weather();
            break;
        case 0:
            console.log(`Thank You!`);
            break;
        default:
            console.log('Invalid Response Try Again');
            main();
    }
}
main();
module.exports = main;
