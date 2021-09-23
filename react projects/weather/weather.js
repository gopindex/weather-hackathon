const Axios = require('axios');
const readline = require('readline-sync');
const main = require('./index');
import main from "./index";


async function weather() {
    try {
        const city = readline.question("please enter city name:  ");
        const res = await Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e1b44d4dd1c0de4ea129eead96d0767a`);

        //console.log(res.data);
            console.log("latitude: "+res.data.coord.lat);
            console.log("longitude: "+res.data.coord.lon);
            console.log("temperature: "+res.data.main.temp);
            console.log("weather: "+res.data.weather[0].main)
            const exit = readline.question("do you want to continue(Y/n)");
            if (exit == 'Y' || exit == 'y'){
               // $.getscript(".\index.js",function(){
                    main();
                 //   });
            }
    }
    catch (err) {
        console.error(err);
    }

}
module.exports = weather;