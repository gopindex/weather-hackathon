// ### Lab 1 :-
// ```
// Write two functions that finds the factorial of any number.
// One should use recursive, the other should just use a for loop

 function findFactorialRecursive(number) {
    if(number===1)
    return 1;
    
    return findFactorialRecursive(number-1)*number;
    //return answer;
 }

console.log(findFactorialRecursive(4));

function findFactorialIterative(number) {
    let fact=1;
    for(let i=1;i<=number;i++){
        fact = fact * i;
    }
    return fact;
}
console.log(findFactorialIterative(4));

// ```
