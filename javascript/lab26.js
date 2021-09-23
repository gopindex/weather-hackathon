
// ### Lab 26:-
// Write an Algorithm to convert 24 hours format time into 12 hours format time
// ### Test Cases :
// ```
// Input  1 : 18:00
// Output 1 :  6:00 PM

// Input  2 : 10:30
// Output 2 : 10:30 AM  
// ```

function _24hoursto12(time){
let hours = time.split(":");
if(Number(hours[0])>=Number("12")){
    hours[0] = Number(hours[0]-12);
    hours[1] = hours[1] + " PM";
}
else{
    hours[1] = hours[1] + " AM";
}
return hours[0] + ":" + hours[1];
}

console.log(_24hoursto12("18:00"));
console.log(_24hoursto12("10:30"));