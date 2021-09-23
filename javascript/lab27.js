// ### Lab 27:-
// Write a function that prepends a zero to single digit numbers
// ### Test Cases :
// ```
// Input  1 : [5, 17, 3, 9, 98]
// Output 1 : [ '05', 17, '03', '09', 98 ]

// Input  2 : [54, 1, 0, 96, 8]
// Output 2 : [ 54, '01', '00', 96, '08' ]
// ```
function prepender(array){
    for(i=0;i<array.length;i++){
        if(array[i] <10){
            array[i] = "0"+array[i];
        }
    }
    return array;
}
console.log(prepender([5, 17, 3, 9, 98]));
console.log(prepender([54, 1, 0, 96, 8]));
