
// ### Lab 23:-
// Write a function which accepts an array as input and splits the array into number array and string array.
// ### Test Cases:
// ```
// Sample Input   : [21, 11,'asma', '😅', 45, '😂', 99, '😛', '🧐', 88, '😍']
// Sample Output  : 
// [ 'asma', '😅', '😂', '😛', '🧐', '😍' ]
// [ 21, 11, 45, 99, 88 ]
// ```
function arrayorstring(input){
    let result =[];
    let resultstring = [];
    //resultstring = input;
    let n = input.length;
    for(i=0;i<n;i++){
        if(Number.isInteger(input[i]))
        {
            resultstring = input.splice(i,1);
            result.push(resultstring);
            console.log(resultstring);
        }
    }
    return result +"\n"+ input; 
}
console.log(arrayorstring([21, 11, 'asma', '😅', 45, '😂', 99, '😛', '🧐', 88, '😍']));