const readline = require('readline-sync');
const axios = require('axios');

function main() {
    const num1 = readline.question('enter number 1:');
    const num2 = readline.question('enter number 2:');

    axios.get(`http://59.92.225.188/add/${num1}/${num2}`)
        .then((res)=> {
            let sum = res.data;
            let url = 'http://59.92.225.188';
            const num3 = readline.question('enter number 3:');

           axios.get(`${url}/add/${sum}/${num3}`)
            .then((res)=> {
                console.log(res.data);
            })
        })
        .catch((err)=> {
            console.error(err);
        });
}main();