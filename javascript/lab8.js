// Print N Fibonacci numbers in one line where is N is a function input parameter.
// #### Test Cases :
// ```
// Sample Input 1 : 10
// Sample Output 1 : 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// Sample Input 2 : 5
// Sample Output 2 : 0, 1, 1, 2, 3,
// ```
function Fibonacci(n){
    let fib =[0,1];
    for(let i=2;i<n;i++){
        fib[i] = (fib[(i-1)]+fib[(i-2)]);
    }
    return fib;
}
console.log(Fibonacci(10));