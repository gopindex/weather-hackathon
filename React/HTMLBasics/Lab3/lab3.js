/*
    Sync/ASync
    JS : i) FCB ii) Promises iii) Async-await

    Promises :
    3 States : a) pending
              b) fulfilled
                c) rejected

1) You consume a Promise
2) You create a Promise
Axios/Fetch
*/

const axios = require('axios');
const fs = require('fs');
const { stringify } = require('querystring');
console.log('start');

function backgroundprocess() {
    axios.get(`https://api.ipify.org?format=json`)
        .then((response) => {
            console.log(response.data);
            let existingFile = Math.floor(Date.now() / 1000) + '.json'
            fs.appendFile(existingFile, "\n" + stringify(response.data), function (err) {
                if (err) {
                    return console.error(err);
                }
                console.log("written to json file");
                fs.rename(existingFile, Math.floor(Date.now() / 1000) + '.json', () => {
                    console.log("\nFile Renamed!\n");
                     
                  });
            });

        })
        .catch((err) => {
            console.error(err);
            console.log("Try Again Later");
        });
}
setInterval(() => {
    backgroundprocess();
}, 5000);
console.log('end');