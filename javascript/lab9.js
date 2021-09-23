// Write an Algorithm to validate the given input Number N is Prime or Not.
// #### Test Cases :
// ```
// Sample Input 1 :  55
// Sample Output 1 : 55 is not a prime number
// Sample Input 2 :  7
// Sample Output 2 : 7 is a prime number
//  ```

function primeornot(x){
    for(let i=2;i<x;i++){
        if(x%i==0){
            return "not prime";
        }
    }
    return "prime";
}
console.log(primeornot(7));