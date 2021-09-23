// ### Lab 28:-
// Write a function that creates Even array elements which accepts N as input. Push the numbers "less than or equal to N" to the Even Array if "N" is an even number.
// #### Test Cases :
// ```
// Sample Input  1: 10 
// Sample Output 1: [2, 4, 6, 8, 10]

// Sample Input  1: 20 
// Sample Output 1: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// ```
function evenarray(N){
    if(N%2==0){
        let array=[];
        for(i=1;i<=N;i++){
            if(i%2==0)
            array.push(i);
        }
        return array;
    }
    else{
        return "N not even number";
    }
}
console.log(evenarray(10));
console.log(evenarray(20));