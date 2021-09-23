let readline = require('readline-sync');
let axios = require('axios');
//const { resolve } = require('path/posix');

let num1 = readline.questionInt('Enter Number 1:');
let num2 = readline.questionInt('Enter Number 2:');

function hitAPI(a,b){
    return new Promise((resolve,reject)=> {
        axios.get(`http://59.92.225.188/add/${a}/${b}`)
            .then((res)=>{
                resolve(res.data)
            })
            .catch((err)=> {
                reject(err)
            })
    })
}
hitAPI(num1,num2)
    .then((sum)=> {
        console.log(sum);
        let num3 = readline.questionInt('Enter Number 3:');
        return hitAPI(sum,num3);
    })
    .then((sum2)=>{
        console.log(sum2);
    })
    .catch((err)=>{
        console.error(err)
    })